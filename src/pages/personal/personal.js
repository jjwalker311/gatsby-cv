import React from 'react';

import { PAGES } from 'constants';
import Layout from '../../components/molecules/Layout';

export default function Personal() {
  return (
    <Layout currentPage={PAGES.ABOUT_ME}>
      <div>
        Personal
      </div>
    </Layout>
  );
}
