import type { Metadata } from "next";
import { site } from "@/constants/site";

type OgType = "website" | "article" | "profile";

interface ArticleMeta {
	publishedTime?: string;
	modifiedTime?: string;
	authors?: string[];
	tags?: string[];
	section?: string;
}

interface PageMetadataOptions {
	title?: string;
	description?: string;
	path?: string;
	noindex?: boolean;
	image?: string;
	keywords?: string[];
	authors?: { name: string; url?: string }[];
	ogType?: OgType;
	article?: ArticleMeta;
	locale?: string;
}

export function generatePageMetadata({
	title,
	description,
	path = "",
	noindex = false,
	image,
	keywords,
	authors,
	ogType = "website",
	article,
	locale,
}: PageMetadataOptions = {}): Metadata {
	const metaTitle = title ? `${title} | ${site.name}` : site.name;
	const metaDescription = description ?? site.description;
	const metaImage = image ?? site.ogImage;
	const canonicalUrl = `${site.url}${path}`;
	const metaLocale = locale ?? site.locale;

	return {
		title: { absolute: metaTitle },
		description: metaDescription,
		...(keywords?.length && { keywords }),
		...(authors?.length && { authors }),
		alternates: { canonical: canonicalUrl },
		robots: noindex
			? { index: false, follow: false, nocache: true }
			: { index: true, follow: true },
		openGraph: {
			title: metaTitle,
			description: metaDescription,
			url: canonicalUrl,
			siteName: site.name,
			locale: metaLocale,
			type: ogType,
			images: [{ url: metaImage, width: 1200, height: 630, alt: metaTitle }],
			...(ogType === "article" && article
				? {
						publishedTime: article.publishedTime,
						modifiedTime: article.modifiedTime,
						authors: article.authors,
						tags: article.tags,
						section: article.section,
					}
				: {}),
		},
		twitter: {
			card: "summary_large_image",
			title: metaTitle,
			description: metaDescription,
			site: site.twitterHandle,
			images: [{ url: metaImage, alt: metaTitle }],
		},
	};
}
