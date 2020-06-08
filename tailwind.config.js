module.exports = {
  purge: ['./src/**/*.js', './src/**/*.html', './src/*.html', './src/*.js'],
  theme: {
    extend: {
      colors: {
        alpha: '#fcba03',
        beta: '#42f5cb',
        gamma: '#fc03cf',
        delta: '#fafafa',
      },
    },
    fontFamily: {
      body: ['Arial', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
