import React, { FC } from 'react';

import { BlogList, Props as BlogListProps } from './BlogList/BlogList';

export const PureContact: FC<Props> = ({ blogs }) => (
  <BlogList {...{ blogs }} />
);

export const Contact: FC<Props> = ({ blogs }) => {
  return <PureContact {...{ blogs }} />;
};

export type PureProps = BlogListProps;

export type Props = PureProps;
