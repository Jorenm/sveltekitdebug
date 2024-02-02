import fs from 'fs'
import path from 'path'

/** @type {import('tailwindcss').Config} */
export default {
	relative: true,
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
	],
}

