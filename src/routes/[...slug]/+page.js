/** @type {import('./$types').PageLoad} */
export async function load(args) {
	return args.data
}

export async function entries() {
	// const slugs = await loadPageSlugs()
	// const slugsArray = slugs.map((page) => (page?.slug?.current ? { slug: page.slug.current } : null)).filter(Boolean);

	// for (var i = 0; i < 10; i++) {
	// 	slugsArray.push({ slug: 'dynamic-page-' + i })
	// }

	// return slugsArray

	return [{
		slug: 'asdf',
	}, {
		slug: 'about-us',
	}, {
		slug: 'products',
	
	}]
}

// export const config ={
// 	isr: {
// 		expiration: 5,
// 		bypassToken: 'bypass'
// 	},
// }

// export const prerender = false;
export const prerender = true;
// export const prerender = 'auto';