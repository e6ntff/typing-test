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
				space: '41.5rem',
			},
			height: { 30: '7.5rem' },
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
