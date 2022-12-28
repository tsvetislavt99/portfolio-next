import React from 'react';

import Article from 'components/Article';
import SectionBreak from 'components/SectionBreak';

import { getAllPostIds, getPostData } from 'utils/posts-helpers';

interface PostProps {
  postData: {
    post: string;
    title: string;
    image: string;
    parsedContent: string;
    updatedAt: string;
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
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

const Post = ({ postData }: PostProps) => {
  console.log(postData);
  return (
    <>
      <Article
        title={postData.title}
        image="blog/api-configuration.png"
        content={postData.parsedContent}
        updatedDate={new Date(postData.updatedAt)}
      />
      <SectionBreak />
    </>
  );
};

export default Post;
