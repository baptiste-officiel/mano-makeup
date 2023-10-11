import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'about' : "url('/img/background-about.png')",
      },
      colors: {
        'beige' : '#FFF7CF',
        'primary-color' : '#C31D27',
        'secondary-color' : '#F76131',
        'pink-color' : '#F6C4BD',
        'fake-transparent' : 'rgba(255, 247, 207, 0.5)'
      },
      fontFamily: {
        sans: ['var(--font-test)'],
        mono: ['var(--font-robot)'],
        title: ['var(--font-title)'],
        main: ['var(--font-main)'],
        subtitle: ['var(--font-subtitle)'],
      },
    },
  },
  plugins: [],
}
export default config
