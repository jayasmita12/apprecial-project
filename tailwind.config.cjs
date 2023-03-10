/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#ffffff',
					'primary-content': '#BB6A37',
					secondary: '#FBFBFB',
					'secondary-content': '#000000',
					accent: '#BB6A37',
					neutral: '#191D24',
					'base-100': '#2A303C',
					'base-200': '#DEDEDE',
					'base-300': '#ffffff',
					'base-content': '#F8F8F8',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				},
				dark: {
					primary: '#1E2025',
					'primary-content': '#BB6A37',
					secondary: '#282828',
					'secondary-content': '#ffffff',
					accent: '#BB6A37',
					neutral: '#191D24',
					'base-100': '#2A303C',
					'base-200': '#5A5A5A',
					'base-300': '#040405',
					'base-content': '#3E3E3E',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		],
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: ''
	},
	// darkMode: 'class',

	theme: {
		extend: {
			fontSize: {
				'heading-1': '50px',
				'heading-2': '42px',
				'heading-3': '32px'
			},
			maxWidth: {
				small: '1152px',
				large: '1280px'
			},
			
		}
	},
	plugins: [require('daisyui')]
};
