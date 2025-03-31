// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          quantum: {
            primary: '#6D28D9',
            secondary: '#4C1D95',
            light: '#C4B5FD',
          }
        },
        animation: {
          'quantum-spin': 'spin 2s linear infinite',
          'quantum-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }