import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { VFC } from 'react';

import {
  BlogDetail,
  Props as BlogDetailProps,
} from '../../components/BlogDetail/BlogDetail';
import { Layout } from '../../components/Layout/Layout';
import { fetchAllBlogIds, fetchBlogData } from '../../lib/blogs';
import { BlogParams } from '../../types/blog';

const PureBlogPage: VFC<PureProps> = ({ blog: { body, id, title } }) => (
  <Layout title="Blog">
    <BlogDetail {...{ body, id, title }} />
  </Layout>
);

const BlogPage: NextPage<Props> = ({ blog }) => {
  // TODO(blogs): loading, failure
  if (!blog) {
    return <div>loading...</div>;
  }

  return <PureBlogPage {...{ blog }} />;
};

export default BlogPage;

export type StaticProps = {
  blog: BlogDetailProps;
};

export type Props = StaticProps;

export type PureProps = Props;

export const getStaticPaths: GetStaticPaths<BlogParams> = async () => {
  const { data } = await fetchAllBlogIds();
  const paths = data.posts.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<StaticProps, BlogParams> = async ({
  params: { id } = { id: '' },
}) => {
  // TODO: validate id, data using error
  const { data } = await fetchBlogData(id);
  const blog = data.post;

  return {
    props: { blog },
  };
};
