import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  const {mode, port} = env
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const MODE = mode || 'development'
  const PORT = Number(port) || 3000
  const isDev = mode === 'development'
  
  const config: webpack.Configuration = buildWebpackConfig({ mode: MODE, paths, isDev, port: PORT })

  return config
}