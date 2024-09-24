import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        targets: "defaults",
        presets: [
          ['@babel/preset-env']
        ],
        "plugins": [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true
          }],
          // […] your other plugins […]
        ]
      }
    }
  }
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = buildCssLoader(options.isDev)
  const typescriptLoaders =
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [fileLoader, svgLoader, babelLoader, typescriptLoaders, cssLoader]
}