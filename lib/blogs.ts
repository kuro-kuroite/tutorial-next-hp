import { GetStaticPathsResult } from 'next';
import fetch from 'node-fetch';

import { Blog, BlogParams } from '../types/blog';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchAllBlogsData = async (): Promise<Blog[]> => {
  // TODO: 型付け
  const res = await fetch(new URL(apiUrl));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blogs: Blog[] = await res.json();

  return blogs;
};

export const fetchAllBlogIds = async (): Promise<
  GetStaticPathsResult<BlogParams>['paths']
> => {
  // TODO: 型付け
  const res = await fetch(new URL(apiUrl));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blogs: Blog[] = await res.json();

  return blogs.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
};

export const fetchBlogData = async (id: BlogParams['id']): Promise<Blog> => {
  // TODO: 型付け
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blog: Blog = await res.json();

  return blog;
};
