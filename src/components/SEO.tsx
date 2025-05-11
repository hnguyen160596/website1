// @ts-nocheck
import type React from 'react';
import { Helmet } from 'react-helmet-async';

interface OpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

interface TwitterProps {
  cardType?: string;
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: OpenGraphProps;
  twitter?: TwitterProps;
  jsonLD?: Record<string, any> | Record<string, any>[];
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, openGraph = {}, twitter = {}, jsonLD }) => {
  const og = {
    type: 'website',
    title,
    description,
    url: canonical,
    ...openGraph,
  };
  const tw = {
    cardType: 'summary_large_image',
    title,
    description,
    ...twitter,
  };

  return (
    <Helmet>
      {/* Primary Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title!} />
      <meta property="og:description" content={og.description!} />
      {og.url && <meta property="og:url" content={og.url!} />}
      {og.image && <meta property="og:image" content={og.image!} />}

      {/* Twitter */}
      <meta name="twitter:card" content={tw.cardType!} />
      <meta name="twitter:title" content={tw.title!} />
      <meta name="twitter:description" content={tw.description!} />
      {tw.image && <meta name="twitter:image" content={tw.image!} />}
      {tw.site && <meta name="twitter:site" content={tw.site!} />}
      {tw.creator && <meta name="twitter:creator" content={tw.creator!} />}

      {/* JSON-LD Structured Data */}
      {jsonLD && (
        Array.isArray(jsonLD) ? (
          jsonLD.map((item, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(item)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(jsonLD)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
