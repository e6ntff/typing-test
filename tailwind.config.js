/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			animation: {
				swim: 'swim 600s linear infinite',
			},
			keyframes: {
				swim: {
					'0%, 100%': { marginLeft: '0' },
					'50%': { marginLeft: '-5000px' },
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark', 'retro', 'cyberpunk', 'synthwave'],
	},
};
