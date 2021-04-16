import React, { VFC } from 'react';

import { Contact } from '../components/ContactPage/Contact';
import { Layout } from '../components/Layout/Layout';

const PureContactPage: VFC = () => (
  <Layout title="Contact">
    <Contact />
  </Layout>
);

const ContactPage: VFC = () => {
  return <PureContactPage />;
};

export default ContactPage;
