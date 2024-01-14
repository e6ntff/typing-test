/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			animation: {
				swim: 'swim 300s linear infinite',
			},
			width: {
				30: '7.5rem',
				backspacemin: '4.25rem',
				space: '41.5rem',
				spacemin: '11rem',
				menu: '23.25rem',
				58: '14.5rem',
			},
			height: { 30: '7.5rem', 62: '15.5rem' },
			keyframes: {
				swim: {
					'0%, 100%': { marginLeft: '0' },
					'50%': { marginLeft: '-1500px' },
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['lofi', 'dark', 'retro', 'cyberpunk', 'synthwave'],
	},
};
