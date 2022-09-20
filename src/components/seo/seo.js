import React from "react"
import { SeoGetSiteMetadata } from "./seo-get-site-metadata"

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
		twitter_site,
		theme_color
	} = SeoGetSiteMetadata()

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
		theme_color
	}
	return (
		<>
			<title>{seo.title}</title>
			<meta property="og:title" content={seo.site_name}></meta>
			<meta name="author" content={seo.author}></meta>
			<meta property="og:locale" content={seo.lang}></meta>
			<meta name="description" content={seo.description} />
			<meta property="og:description" content={seo.description} />
			<link rel="canonical" href={seo.siteUrl}></link>
			<meta property="og:url" content={seo.url} />
			<meta property="og:site_name" content={seo.site_name} />
			<meta property="og:image"  content={seo.image} />
			<meta property="og:type"  content="article" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:image" content={seo.twitter_image} />
			<meta name="twitter:site" content={seo.twitter_site} />
			<meta name="twitter:creator" content={seo.twitter_creator} />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32"/>
			<link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16"/>
			<link rel="manifest" href="/favicons/manifest.json"/>
			<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg"/>
			<link rel="shortcut icon" href="/favicons/favicon.ico"/>
			<meta name="apple-mobile-web-app-title" content={seo.site_name}/>
			<meta name="application-name" content={seo.site_name}/>
			<meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
			<meta name="theme-color" content={seo.theme_color}/>
			{children}
		</>
	)
}
