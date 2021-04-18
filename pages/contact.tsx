import { NextPage } from 'next';
import React, { VFC } from 'react';

import { Contact } from '../components/Contact/Contact';
import { Layout } from '../components/Layout/Layout';

const PureContactPage: VFC = () => (
  <Layout title="Contact">
    <Contact />
  </Layout>
);

const ContactPage: NextPage = () => {
  return <PureContactPage />;
};

export default ContactPage;
