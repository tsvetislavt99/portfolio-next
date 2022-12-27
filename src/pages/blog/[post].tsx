import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Article from 'components/Article';
import SectionBreak from 'components/SectionBreak';
import { remark } from 'remark';

// TODO: Continue from here
export function getAllPostIds() {
  const fileNames = fs.readdirSync(
    '/Users/tsvetislavtodorov/Projects/portfolio-next/src/articles',
  );

  return fileNames.map((fileName) => {
    return {
      params: {
        post: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getPostData(post) {
  const fullPath = path.join(
    '/Users/tsvetislavtodorov/Projects/portfolio-next/src/articles/',
    `${post}.md`,
  );
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark().process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    post,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.post);
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }: any) => {
  console.log(postData);
  return (
    <>
      <Article
        title="An awesome heading wow"
        image="blog/api-configuration.png"
        content={postData.contentHtml}
        updatedDate={new Date()}
      />
      <SectionBreak />
    </>
  );
};

export default Post;
