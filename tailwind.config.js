/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        'success': '#0ABF30',
        'error': '#E24D4C',
        'info': '#3498DB'
      },
      keyframes: {
        show_toast: {
          '0%': { transform: 'translateX(100%)' },
          '40%': { transform: 'translateX(-5%)' },
          '80%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-10px)' },
        },
        hide_toast: {
          '0%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(0%)' },
          '80%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(calc(100% + 20px))' },
        },
      },
      animation: {
        'toast_show_toast': 'show_toast 0.5s ease forwards',
        'toast_hide_toast': 'hide_toast 0.5s ease forwards'
      },
    },
  },
  plugins: [],
}
