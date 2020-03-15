module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'entry', debug: true }],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: false,
      },
    ],
  ],
};
