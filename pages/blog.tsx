import { GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { Blog } from '../components/Blog/Blog';
import { Layout } from '../components/Layout/Layout';
import { fetchAllBlogsData } from '../lib/blogs';
import { Blog as BlogType } from '../types/blog';

const PureBlogPage: VFC<PureProps> = ({ blogs }) => (
  <Layout title="Blog">{blogs && <Blog {...{ blogs }} />}</Layout>
);

const BlogPage: VFC<Props> = ({ blogs }) => {
  // TODO(blogs): loading, failure

  return <PureBlogPage {...{ blogs }} />;
};

export default BlogPage;

export type StaticProps = {
  blogs: BlogType[];
};

export type Props = StaticProps;

export type PureProps = Props;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blogs = await fetchAllBlogsData();

  return {
    props: { blogs },
  };
};
