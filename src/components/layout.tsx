import * as React from 'react';

import { SEO } from './seo';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <SEO />
      <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white fill-available">
        <main className="relative flex flex-col flex-1">{children}</main>
      </div>
    </>
  );
}

export { Layout };
