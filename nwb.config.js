const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  type: 'react-component',
  babel: {
    plugins: [
      'transform-flow-strip-types',
    ],
    stage: 1,
  },
  webpack: {
    compat: {
      enzyme: isTest,
    },
  },
  npm: {
    esModules: true,
    umd: {
      global: 'MaterialStyled',
      externals: {
        react: 'React',
      },
    },
  },
};
