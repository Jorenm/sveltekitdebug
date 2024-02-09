// export const prerender = false
// export const prerender = true
export const prerender = 'auto'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

	console.log('page.server.js [load]', params.slug)

	await new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, 2000)
	})

	console.log('awaited')

	return {
		page: {
			slug: params.slug,
			title: 'Dynamic Page [' + params.slug + ']',
			time: Date.now()
		}
	};
};

export async function entries() {
	// const slugs = await loadPageSlugs()
	// const slugsArray = slugs.map((page) => (page?.slug?.current ? { slug: page.slug.current } : null)).filter(Boolean);

	return [{
		slug: 'about-us',
	}, {
		slug: 'products',
	
	}]
}

export const config ={
	isr: {
		expiration: 10,
		bypassToken: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
	},
}

