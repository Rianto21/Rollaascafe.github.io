module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        pacifico: ['Pacifico'],
        nunito: ['Nunito'],
        nunitosans: ['Nunito Sans']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
