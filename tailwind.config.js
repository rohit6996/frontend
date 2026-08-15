/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nagpur: {
          bg: '#F8FAFC',
          white: '#FFFFFF',
          blue: {
            primary: '#1976D2',
            light: '#EAF4FB',
          },
          navy: '#123B5D',
          green: {
            primary: '#2E8B57',
            light: '#EAF7EF',
          },
          orange: '#F4A261',
          text: {
            main: '#1F2937',
            secondary: '#64748B',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
