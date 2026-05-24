import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    sassOptions: {
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin'],
    },
};

export default withNextIntl(withMDX(nextConfig));