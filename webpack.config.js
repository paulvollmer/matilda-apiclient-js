module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    library: 'MatildaClient',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', {modules: 'commonjs'}]],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
