module.exports = {
  use: [
    '@neutrinojs/standardjs',

    ['@neutrinojs/vue', {
      html: { title: 'cross-set-solver' },
      style: { loaders: ['sass-loader'] },
      babel: { presets: ['babel-preset-stage-0'] }
    }]
  ]
}
