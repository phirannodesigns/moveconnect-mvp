import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <div className="w-full px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <SEO title="Home" />
        <h1>Hello World</h1>
      </div>
    </Layout>
  );
}

export default IndexPage;
