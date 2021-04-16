import { GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { BlogList } from '../components/Blog/BlogList/BlogList';
import { Layout } from '../components/Layout/Layout';
import { fetchAllBlogsData } from '../lib/posts';
import { Blog } from '../types/blog';

const PureBlogPage: VFC<PureProps> = ({ blogs }) => (
  <Layout title="Blog">{blogs && <BlogList {...{ blogs }} />}</Layout>
);

const BlogPage: VFC<Props> = ({ blogs }) => {
  // TODO(blogs): loading, failure

  return <PureBlogPage {...{ blogs }} />;
};

export default BlogPage;

export type StaticProps = {
  blogs: Blog[];
};

export type Props = StaticProps;

export type PureProps = Props;

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blogs = await fetchAllBlogsData();

  return {
    props: { blogs },
  };
};
