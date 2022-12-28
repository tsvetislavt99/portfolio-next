import CodeCopyBtn from 'components/CopyCode';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// TODO: Add stronger value types for content types
interface ArticleProps {
  title: string;
  image: string;
  updatedDate: Date;
  content: any;
}

const Pre = ({ children }: { children: React.ReactNode }) => (
  <pre className="blog-pre relative">
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);

export default function Article({ title, updatedDate, content }: ArticleProps) {
  console.log(title);
  return (
    <article className=" max-w-[1240px] mx-auto px-6">
      <h1>{title}</h1>
      <p>{formatDistanceToNow(updatedDate)}</p>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          pre: Pre,
          code({ inline, children, ...props }) {
            const match = /language-(\w+)/.exec('');
            return !inline && match ? (
              <SyntaxHighlighter
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
