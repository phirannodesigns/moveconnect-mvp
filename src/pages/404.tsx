import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

function NotFoundPage(): React.ReactElement {
  return (
    <Layout>
      <div className="w-full px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <SEO title="404: Page Not Found" />
        <h1>404: Page Not Found</h1>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
