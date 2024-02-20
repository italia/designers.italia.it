import React from "react";
import { SeoGetSiteMetadata } from "./seo-get-site-metadata";

// eslint-disable-next-line import/prefer-default-export
export function Seo({
  title,
  description,
  image,
  canonical,
  pathname,
  lang,
  children,
}) {
  const {
    siteName,
    title: defaultTitle,
    lang: defaultLang,
    author,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
    twitterCreator,
    twitterSite,
    themeColor,
  } = SeoGetSiteMetadata();

  const seo = {
    siteName,
    title: title || defaultTitle,
    lang: lang || defaultLang,
    author,
    canonical,
    description: description || defaultDescription,
    image: `${siteUrl}${image}` || defaultImage,
    siteUrl,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    twitterCreator,
    twitterSite,
    themeColor,
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      {/* og metatags */}
      <meta property="og:locale" content={seo.lang} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:siteName" content={seo.siteName} />
      <meta property="og:type" content="article" />
      {/* twitter metatags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:site" content={seo.twitterSite} />
      <meta name="twitter:creator" content={seo.twitterCreator} />
      {/* icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={seo.siteName} />
      <meta name="application-name" content={seo.siteName} />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      {/* theme */}
      <meta name="theme-color" content={seo.themeColor} />
      {children}
    </>
  );
}
