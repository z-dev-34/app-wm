/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		"./src/**/*.{html,js}",
	],
	theme: {

		extend: {
			keyframes: {
				spin: {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(360deg)'
					},
				},
				move: {
					'0%': {
						transform: 'translateY(0)'
					},
					'25%': {
						transform: 'translateY(-25px)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					},
					'75%': {
						transform: 'translateY(-25px)'
					},
					'100%': {
						transform: 'translateY(0)'
					},
				},
				motion: {
					'0%': {
						transform: 'translateY(0)'
					},
					'25%': {
						transform: 'translate(-15px, -15px)'
					},
					'50%': {
						transform: 'translate(-8px, -8px)'
					},
					'75%': {
						transform: 'translate(-15px, 8px)'
					},
					'100%': {
						transform: 'translateY(0)'
					},
				},
				dz: {
					'0%': {
						transform: 'translate(0)'
					},
					'25%': {
						transform: 'translate(-15px)'
					},
					'50%': {
						transform: 'translate(-8px)'
					},
					'75%': {
						transform: 'translate(-15px)'
					},
					'100%': {
						transform: 'translate(0)'
					},
				}
			},
			animation: {
				'spin': 'spin 10s linear infinite',
				'move': 'move 7s infinite',
				'motion': 'motion 7s infinite',
				'dz': 'dz 7s infinite',
			},
			backgroundImage: {
				'heart': "url('../images/like.png')",
			}
		},

		plugins: [

		],
		colors: {
			'grey-border': '#F5F5F5',
			'white': '#fff',
			'bodycolor': '#666666',
			'primary': 'var(--primary)',
			'primary2': '#AED257',
			'light': 'var(--bg-light)',
			'yellow': 'var(--secondary)',
			'black2': '#222222',
			'transparent': '#00000000',
			'black-blur': '#151515b3',
			'dark': '#414042',
			'danger': '#ff1114',
		},
		fontFamily: {
			lobster: ['Lobster, cursive'],
			poppins: ['Poppins, sans-serif']
		},
		screens: {
			'sm': '576px',
			// => @media (min-width: 576px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '992px',
			// => @media (min-width: 992px) { ... }

			'xl': '1170px',
			// => @media (min-width: 1170px) { ... }

			'2xl': '1480px',
			// => @media (min-width: 1480px) { ... }


			'max-sm': {
				'max': '575px'
			},
			// => @media (max-width: 575px) { ... }

			'max-md': {
				'max': '767px'
			},
			// => @media (max-width: 767px) { ... }

			'max-lg': {
				'max': '991px'
			},
			// => @media (max-width: 991px) { ... }

			'max-2lg': {
				'max': '1024px'
			},
			// => @media (max-width: 1024px) { ... }

			'max-xl': {
				'max': '1280px'
			},
			// => @media (max-width: 1280px) { ... }

			'max-2xl': {
				'max': '1480px'
			}
			// => @media (max-width: 1480px) { ... }
		}
	}


}