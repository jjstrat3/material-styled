module.exports = {
  type: 'react-component',
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
