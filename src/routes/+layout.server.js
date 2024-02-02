/** @type {import('./$types').LayoutServerLoad} */
export const prerender = true;
import { PUBLIC_NODE_ENV } from '$env/static/public'


export async function load({ params }) {
	return {
		includeAllTailwind: PUBLIC_NODE_ENV === 'development'
	};
};