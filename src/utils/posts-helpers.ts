import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync('src/articles');

  return fileNames.map((fileName) => {
    return {
      params: {
        post: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getPostData = async (post: string) => {
  const fullPath = path.join('src/articles/', `${post}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  console.log(matterResult);

  const processedContent = await remark().process(matterResult.content);
  const fullContent = processedContent.toString();
  const parsedContent = fullContent.split('\n').slice(5).join('\n');

  console.log(parsedContent);

  // Combine the data with the id and contentHtml
  return {
    post,
    parsedContent,
    ...matterResult.data,
    ...getHeadingAndImageFromMarkdown(fullContent),
  };
};

const getHeadingAndImageFromMarkdown = (mdString: string) => {
  const lines = mdString.split('\n').slice(0, 5);

  return {
    title: lines[0].replace('# ', ''),
    image: lines[2].replace('# ', ''),
    updatedAt: lines[4].replace('# ', ''),
  };
};
