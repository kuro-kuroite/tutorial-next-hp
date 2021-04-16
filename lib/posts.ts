import fetch from 'node-fetch';

import { Blog } from '../types/blog';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchAllBlogsData = async (): Promise<Blog[]> => {
  // TODO: 型付け
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const res = await fetch(new URL(apiUrl));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const blogs: Blog[] = await res.json();

  return blogs;
};
