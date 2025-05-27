/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFB6C1',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFEFF0',
          300: '#FFD8DC',
          400: '#FFC7CD',
          500: '#FFB6C1',
          600: '#FF8FA0',
          700: '#FF687F',
          800: '#FF415E',
          900: '#FF1A3D',
          950: '#E6002A'
        },
        secondary: {
          DEFAULT: '#87CEEB',
          50: '#F4F9FE',
          100: '#E8F3FD',
          200: '#CCE5FB',
          300: '#AFD7F8',
          400: '#9BD2F2',
          500: '#87CEEB',
          600: '#5FB9E3',
          700: '#37A4DB',
          800: '#2085B8',
          900: '#196892',
          950: '#104D6C'
        },
        accent: '#FFD700',
        background: '#FFF5EE',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}