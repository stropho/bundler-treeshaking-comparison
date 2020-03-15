import { rollup } from 'rollup'

const ROLLUP_OUTPUT_OPTIONS = {
  file: 'output.js',
  format: 'commonjs',
}
const ROLLUP_INPUT_OPTIONS = {
}

const runRollup = async (inputOptions, outpuOptions) => {
  const bundle = await rollup(inputOptions)
  const result = await bundle.generate(outpuOptions)

  return result
}

export const getRollupOutput = async (absolutePathFileName) => {
  const inputOptions = {
    ...ROLLUP_INPUT_OPTIONS,
    input: absolutePathFileName,
  }
  const result = await runRollup(inputOptions, ROLLUP_OUTPUT_OPTIONS)
  return result.output[0].code.trim()
}

export const getRollupNoTreeshakingOutput = async (absolutePathFileName) => {
  const inputOptions = {
    ...ROLLUP_INPUT_OPTIONS,
    treeshake: false,
    input: absolutePathFileName,
  }
  const outpuOptions = {
    ...ROLLUP_OUTPUT_OPTIONS,
  }
  const result = await runRollup(inputOptions, outpuOptions)
  return result.output[0].code.trim()
}
