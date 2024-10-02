import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				focus: '#2767b5',
				normal_grey: '#7373736c',
				highlight_grey: '#cfcfd1',
			},
		},
	},
	plugins: [],
};
export default config;
