import Terser from 'terser'
import { getRollupNoTreeshakingOutput } from './rollup'

export const TERSER_OPTIONS = {
  mangle: false,
  output: { // default null,
    comments: 'all',
    beautify: true,
    quote_style: 1, // single quote
  },
}

export const runTerserOnCombinedCode = async (absolutePathFileName) => {
  const options = {
    ...TERSER_OPTIONS,
    module: true,
  }
  const code = await getRollupNoTreeshakingOutput(absolutePathFileName)
  const result = Terser.minify(code, options)

  return result.code
}
