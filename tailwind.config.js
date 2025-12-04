export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'floatUp 15s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatUp: {
          '0%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateY(-50vh) translateX(20px)',
            opacity: '0.6'
          },
          '100%': { 
            transform: 'translateY(-100vh) translateX(-10px)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
}
