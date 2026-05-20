"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/once-ui/components";
import styles from "./CodeBlock.module.scss";

type CodeBlockProps = React.HTMLAttributes<HTMLPreElement>;

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently no-op
    }
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.copy}
        onClick={handleCopy}
        variant="tertiary"
        size="s"
        prefixIcon={copied ? "check" : undefined}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
      <pre ref={preRef} className={className} {...props}>
        {children}
      </pre>
    </div>
  );
}
