import { createFsFromVolume, Volume } from 'memfs'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import path from 'path'
import { TERSER_OPTIONS } from './terser'

const CONFIG = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: TERSER_OPTIONS,
      }),
    ],
  },
  devtool: false,
  output: {
    path: __dirname,
    filename: 'output.js',
  },
}
export const runWebpack = (absolutePathFileName) => new Promise((resolve) => {
  const compiler = webpack({
    ...CONFIG,
    entry: absolutePathFileName,
  })
  const vol = new Volume()
  const fs = createFsFromVolume(vol)
  // for webpack@4
  fs.join = path.join.bind(path)
  compiler.outputFileSystem = fs

  // eslint-disable-next-line no-unused-vars
  compiler.run((err, stats) => {
    const output = fs.readFileSync(path.resolve(__dirname, './output.js'))
    resolve(output.toString())
  })
})

export const getWebpackExtractedCode = async (absolutePathFileName) => {
  const output = await runWebpack(absolutePathFileName)
  const code = output
    // remove webpackBootstrap before the actual code
    .replace(/[\s\S]*(function\([^{]*{[^\S]*["']use strict["'])/, '$1')
    // remove webpackBootstrap after the actual code
    .replace(/([\s\S]*)\/\*\*\*\*[\s\S]*/, '$1')

  return code.trim()
}
