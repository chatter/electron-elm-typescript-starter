import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'

const mode = process.env.NODE_ENV || 'development'

const commonConfig = {
  mode,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.ts$/,
        use: 'ts-loader'
      },
      {
        exclude: [/elm-stuff/, /node_modules/],
        test: /.elm$/,
        use: {
          loader: 'elm-webpack-loader',
          options:
            mode === 'production' ? {} : { debug: true, forceWatch: true }
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.elm', '.ts']
  }
}

module.exports = [
  {
    ...commonConfig,
    entry: { main: './src/ts/main.ts' },
    target: 'electron-main'
  },
  {
    ...commonConfig,
    entry: { renderer: './src/ts/renderer.ts' },
    plugins: [new HtmlWebpackPlugin()],
    target: 'electron-renderer'
  }
]
