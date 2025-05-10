import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOMetaTags = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOMetaTags;