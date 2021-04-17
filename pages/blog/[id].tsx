import { GetStaticPaths, GetStaticProps } from 'next';
import React, { VFC } from 'react';

import { BlogDetail } from '../../components/BlogDetail/BlogDetail';
import { Layout } from '../../components/Layout/Layout';
import { fetchAllBlogIds, fetchBlogData } from '../../lib/blogs';
import { Blog, BlogParams } from '../../types/blog';

const PureBlogPage: VFC<PureProps> = ({ blog: { body, id, title } }) => (
  <Layout title="Blog">
    <BlogDetail {...{ body, id, title }} />
  </Layout>
);

const BlogPage: VFC<Props> = ({ blog }) => {
  // TODO(blogs): loading, failure
  if (!blog) {
    return <div>loading...</div>;
  }

  return <PureBlogPage {...{ blog }} />;
};

export default BlogPage;

export type StaticProps = {
  blog: Blog;
};

export type Props = StaticProps;

export type PureProps = Props;

export const getStaticPaths: GetStaticPaths<BlogParams> = async () => {
  const paths = await fetchAllBlogIds();

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<StaticProps, BlogParams> = async ({
  params: { id } = { id: '' },
}) => {
  const blog = await fetchBlogData(id);

  return {
    props: { blog },
  };
};
