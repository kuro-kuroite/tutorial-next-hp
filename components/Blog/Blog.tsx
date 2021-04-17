import React, { FC } from 'react';

import { BlogList, Props as BlogListProps } from './BlogList/BlogList';

export const PureBlog: FC<Props> = ({ blogs }) => <BlogList {...{ blogs }} />;

export const Blog: FC<Props> = ({ blogs }) => {
  return <PureBlog {...{ blogs }} />;
};

export type PureProps = BlogListProps;

export type Props = PureProps;
