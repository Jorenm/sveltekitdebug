/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	console.log('page.server.js [load]', params.slug)

	return {
		page: {
			slug: params.slug,
			title: 'Dynamic Page [' + params.slug + ']',
		}
	};
};

// export async function entries() {
// 	const slugs = await loadPageSlugs()
// 	const slugsArray = slugs.map((page) => (page?.slug?.current ? { slug: page.slug.current } : null)).filter(Boolean);

// 	for (var i = 0; i < 10; i++) {
// 		slugsArray.push({ slug: 'dynamic-page-' + i })
// 	}

// 	return slugsArray
// }

// export const config ={
// 	isr: {
// 		expiration: 5,
// 		bypassToken: 'bypass'
// 	},
// }

// export const prerender = false;
// export const prerender = true;
export const prerender = 'auto';