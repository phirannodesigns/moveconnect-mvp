import * as React from 'react';

import { ContactForm } from '../components/contact-form';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

function IndexPage(): React.ReactElement {
  return (
    <Layout>
      <div className="w-full px-4 py-12 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <SEO title="Moveconnect MVP" />
        <ContactForm />
      </div>
    </Layout>
  );
}

export default IndexPage;
