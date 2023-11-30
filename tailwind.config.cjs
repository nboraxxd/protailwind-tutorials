/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        'square-diagonal': `${(Math.sqrt(2) * 100).toFixed(2)}%`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('./src/tutorials/animated-stripes/01-08-02/stripes-plugin.cjs'),
  ],
}
