/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
			},
			colors: {
				base: '#070B14',
				elevated: '#0E1628',
				surface: '#111C31',
				stroke: '#22314D',
				primary: '#EAF1FF',
				secondary: '#A8B6D3',
				muted: '#6F7F9E',
				accent: {
					DEFAULT: '#5FA8FF',
					strong: '#3F8CFF',
					soft: 'rgba(95,168,255,0.14)'
				}
			},
			boxShadow: {
				soft: '0 18px 40px rgba(2, 6, 23, 0.45)',
				card: '0 0 0 1px rgba(95, 168, 255, 0.12), 0 12px 30px rgba(2, 6, 23, 0.42)'
			},
			transitionTimingFunction: {
				premium: 'cubic-bezier(0.22, 1, 0.36, 1)'
			},
			borderRadius: {
				xl2: '1.25rem'
			},
			maxWidth: {
				'8xl': '80rem'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
