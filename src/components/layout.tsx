import * as React from 'react';

import { Footer } from './footer';
import { Nav } from './nav';
import { SEO } from './seo';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <SEO />
      <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white fill-available">
        <Nav />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export { Layout };
