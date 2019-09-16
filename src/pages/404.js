import React from 'react';

import Layout from 'components/molecules/Layout';
import SEO from 'components/molecules/Seo';

import PAGES from 'constants/pages';

const NotFoundPage = () => (
  <Layout currentPage={PAGES.NOT_FOUND}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
