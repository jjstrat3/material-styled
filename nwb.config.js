var isTest = process.env.NODE_ENV === 'test'

module.exports = {
  type: 'react-component',
  babel: {
    stage: 1
  },
  webpack: {
    compat: {
      enzyme: isTest ? true : false
    }
  },
  npm: {
    esModules: true,
    umd: {
      global: 'MaterialStyled',
      externals: {
        react: 'React'
      }
    }
  }
}
