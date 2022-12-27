import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// TODO: Add stronger value types for content types
interface ArticleProps {
  title: string;
  image: string;
  updatedDate: Date;
  content: any;
}

export default function Article({ title, updatedDate, content }: ArticleProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{formatDistanceToNow(updatedDate)}</p>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
}
