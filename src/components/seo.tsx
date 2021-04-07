import { useLocation } from '@reach/router';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import config from '../../config.json';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}

function SEO({
  title = '',
  description = '',
  pathname = '',
  image = '',
  children = null,
}: SEOProps): React.ReactElement {
  const location = useLocation();

  const { siteTitle, siteUrl, siteDescription, siteImage, hrefLang } = config;

  const seo = {
    title,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
    image: `${siteUrl}${image || siteImage}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </Helmet>
  );
}

export { SEO };
