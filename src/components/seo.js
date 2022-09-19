import React from "react"
import { useSiteMetadata } from "./use-site-metadata"

export const Seo = ({title, description, image, pathname, children}) => {
	const {
		site_name,
		title: defaultTitle,
		lang,
		author,
		description: defaultDescription,
		image : defaultImage,
		twitter_image,
		siteUrl,
		twitterUsername,
		twitter_creator,
		twitter_site
	} = useSiteMetadata()

	const seo = {
		site_name,
		title: title || defaultTitle,
		lang,
		author,
		description: description || defaultDescription,
		image : image || defaultImage,
		siteUrl,
		url: `${siteUrl}${pathname || ``}`,
		twitterUsername,
		twitter_image,
		twitter_creator,
		twitter_site,
	}
	return (
		<>
			<title>{seo.site_name} | {seo.title}</title>
			<meta property="og:title" content={seo.site_name}></meta>
			<meta name="author" content={seo.author}></meta>
			<meta property="og:locale" content={seo.lang}></meta>
			<meta name="description" content={seo.description} />
			<meta property="og:description" content={seo.description} />
			<link rel="canonical" href={seo.siteUrl}></link>
			<meta property="og:url" content={seo.url} />
			<meta property="og:site_name" content={seo.site_name} />
			<meta property="og:image"  content={seo.image} />
			<meta property="og:type"  content="artcle" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:image" content={seo.twitter_image} />
			<meta name="twitter:site" content={seo.twitter_site} />
			<meta name="twitter:creator" content={seo.twitter_creator} />
			<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" href="/assets/icons/favicon-32x32.png" sizes="32x32"/>
			<link rel="icon" type="image/png" href="/assets/icons/favicon-16x16.png" sizes="16x16"/>
			<link rel="manifest" href="/assets/icons/manifest.json"/>
			<link rel="mask-icon" href="/assets/icons/safari-pinned-tab.svg"/>
			<link rel="shortcut icon" href="/assets/icons/favicon.ico"/>
			<meta name="apple-mobile-web-app-title" content="Designers Italia"/>
			<meta name="application-name" content="Designers Italia"/>
			<meta name="msapplication-config" content="/assets/icons/browserconfig.xml"/>
			<meta name="theme-color" content="#0066cc"/>
			{children}
		</>
	)
}