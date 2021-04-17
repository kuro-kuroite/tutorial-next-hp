import React from 'react';

import { Layout } from '../components/Layout/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js
      <span aria-label="hello" role="img">
        👋
      </span>
    </h1>
  </Layout>
);

export default IndexPage;
