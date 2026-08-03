export const site = {
	name: "Frontpage Base",
	shortName: "Base",
	description:
		"Production-ready frontend boilerplate for internal tools and admin panels.",
	url: process.env.NEXT_PUBLIC_FE_URL ?? "http://localhost:3000",
	ogImage: "/opengraph-image",
	twitterHandle: "@yourtwitterhandle",
	locale: "en_US",
	themeColor: "#ffffff",
} as const;
