import { rollup } from 'rollup'

const ROLLUP_OUTPUT_OPTIONS = {
  file: 'output.js',
  format: 'commonjs',
}
const ROLLUP_INPUT_OPTIONS = {
}

export const runRollup = async (absolutePathFileName) => {
  const inputOptions = {
    ...ROLLUP_INPUT_OPTIONS,
    input: absolutePathFileName,
  }
  const bundle = await rollup(inputOptions)
  const result = await bundle.generate(ROLLUP_OUTPUT_OPTIONS)

  return result
}

export const getRollupOutput = async (absolutePathFileName) => {
  const result = await runRollup(absolutePathFileName)
  return result.output[0].code.trim()
}
