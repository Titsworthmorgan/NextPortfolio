import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';
import fs from 'node:fs';
import path from 'node:path';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';

import { InlineCode, SmartImage, SmartLink, Text } from '@/once-ui/components';
import { HeadingLink } from '@/components';
import { CodeBlock } from '@/components/CodeBlock';

import { TextProps } from '@/once-ui/interfaces';
import { SmartImageProps } from '@/once-ui/components/SmartImage';

type TableProps = {
    data: {
        headers: string[];
        rows: string[][];
    };
};

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
        {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
        ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
    if (href.startsWith('/')) {
        return (
            <SmartLink href={href} {...props}>
                {children}
            </SmartLink>
        );
    }

    if (href.startsWith('#')) {
        return <a href={href} {...props}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
    if (!src) {
        console.error("SmartImage requires a valid 'src' property.");
        return null;
    }

    return (
        <SmartImage
            className="my-20"
            enlarge
            radius="m"
            aspectRatio="16 / 9"
            alt={alt}
            src={src}
            {...props}/>
        )
}

function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
        return (
            <HeadingLink
                style={{marginTop: 'var(--static-space-24)', marginBottom: 'var(--static-space-12)'}}
                level={level}
                id={slug}
                {...props}>
                {children}
            </HeadingLink>
        );
    };
  
    CustomHeading.displayName = `Heading${level}`;
  
    return CustomHeading;
}

function createParagraph({ children }: TextProps) {
    return (
        <Text style={{lineHeight: '150%'}}
            variant="body-default-m"
            onBackground="neutral-medium"
            marginTop="8"
            marginBottom="12">
            {children}
        </Text>
    );
};

type MDXCodeProps = React.HTMLAttributes<HTMLElement> & {
    'data-language'?: string;
};

function MDXCode({ children, ...props }: MDXCodeProps) {
    // rehype-pretty-code only sets data-language on block tokens.
    // Inline backtick code has no language attribute — render as the once-ui pill.
    if (props['data-language']) {
        return <code {...props}>{children}</code>;
    }
    return <InlineCode>{children}</InlineCode>;
}

const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    code: MDXCode as any,
    pre: CodeBlock as any,
    Table,
};

const rehypePrettyCodeOptions: Partial<RehypePrettyCodeOptions> = {
    theme: { light: 'github-light', dark: 'github-dark' },
    keepBackground: false,
    defaultLang: 'plaintext',
};

// Map file extension to a Shiki language id.
const langByExt: Record<string, string> = {
    cpp: 'cpp', cc: 'cpp', cxx: 'cpp', hpp: 'cpp', h: 'cpp', hh: 'cpp', hxx: 'cpp',
    ts: 'ts', tsx: 'tsx', js: 'js', jsx: 'jsx',
    py: 'python', rs: 'rust', go: 'go', sh: 'bash', bash: 'bash',
    json: 'json', yml: 'yaml', yaml: 'yaml', toml: 'toml',
    md: 'markdown', mdx: 'mdx', css: 'css', scss: 'scss', html: 'html',
};

// Read a single attribute out of a JSX-style tag.
function attr(raw: string, name: string): string | undefined {
    const m = raw.match(new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`));
    return m?.[1];
}
function boolAttr(raw: string, name: string): boolean {
    return new RegExp(`\\b${name}\\b(?!\\s*=)`).test(raw);
}

// Expand `<Source file="..." title="..." lang="..." highlight="..." showLineNumbers />`
// JSX tags in the MDX source by reading the referenced file and substituting a
// fenced code block. rehype-pretty-code then handles syntax highlighting.
function expandSourceDirectives(source: string): string {
    return source.replace(/<Source\b([\s\S]*?)\/>/g, (_, attrs: string) => {
        const file = attr(attrs, 'file');
        if (!file) return '';
        const abs = path.join(process.cwd(), file);
        let content: string;
        try {
            content = fs.readFileSync(abs, 'utf8');
        } catch {
            return `\n\`\`\`\nSource file not found: ${file}\n\`\`\`\n`;
        }
        const ext = file.split('.').pop()?.toLowerCase() ?? '';
        const lang = attr(attrs, 'lang') ?? langByExt[ext] ?? 'plaintext';
        const title = attr(attrs, 'title') ?? file.split('/').pop();
        const highlight = attr(attrs, 'highlight');
        const showLineNumbers = boolAttr(attrs, 'showLineNumbers');
        const meta = [
            title ? `title="${title}"` : '',
            showLineNumbers ? 'showLineNumbers' : '',
            highlight ? `{${highlight}}` : '',
        ].filter(Boolean).join(' ');
        return `\n\`\`\`${lang}${meta ? ' ' + meta : ''}\n${content.replace(/\n$/, '')}\n\`\`\`\n`;
    });
}

type CustomMDXProps = MDXRemoteProps & {
    components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
    const expandedSource = typeof props.source === 'string'
        ? expandSourceDirectives(props.source)
        : props.source;
    return (
        <MDXRemote
            {...props}
            source={expandedSource}
            components={{ ...components, ...(props.components || {}) }}
            options={{
                ...(props.options || {}),
                mdxOptions: {
                    ...(props.options?.mdxOptions || {}),
                    rehypePlugins: [
                        ...((props.options?.mdxOptions?.rehypePlugins as any) || []),
                        [rehypePrettyCode, rehypePrettyCodeOptions],
                    ],
                },
            }}
        />
    );
}