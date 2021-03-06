import React, { FC } from 'react';

import { BlogItem, Props as BlogItemProps } from '../BlogItem/BlogItem';

export const PureBlogList: FC<PureProps> = ({ blogs }) => (
  <ul className="m-10 space-y-1">
    {blogs &&
      blogs.map(({ id, title }) => <BlogItem key={id} {...{ id, title }} />)}
  </ul>
);

export const BlogList: FC<Props> = ({ blogs }) => {
  return <PureBlogList {...{ blogs }} />;
};

export type PureProps = Props;

export type Props = {
  blogs: BlogItemProps[];
};
