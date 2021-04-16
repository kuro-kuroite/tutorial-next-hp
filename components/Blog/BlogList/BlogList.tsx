import React, { FC } from 'react';

import { BlogItem, Props as BlogItemProps } from '../BlogItem/BlogItem';

export const PureBlogList: FC<Props> = ({ blogs }) => (
  <ul className="m-10">
    {blogs &&
      blogs.map(({ id, title }) => <BlogItem key={id} {...{ id, title }} />)}
  </ul>
);

export const BlogList: FC<Props> = ({ blogs }) => {
  return <PureBlogList {...{ blogs }} />;
};

export type PureProps = {
  blogs: BlogItemProps[];
};

export type Props = PureProps;
