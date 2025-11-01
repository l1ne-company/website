/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Courier New', 'monospace'],
      },
      colors: {
        'ui-label-bg': '#c79325',
        'ui-label-fg': '#000000',
        'border-dark': '#352b19',
        'border-darker': '#130f04',
        'text-amber': '#d79326',
        'cad-cyan': '#00FFFF',
        'cad-green': '#57ff7a',
      },
    },
  },
  plugins: [],
}
