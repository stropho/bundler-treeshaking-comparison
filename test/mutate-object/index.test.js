import path from 'path'
import { getRollupOutput, getWebpackExtractedCode, runTerserOnCombinedCode } from '../../src'

const FOLDER = path.basename(__dirname)
const INPUT_FILE = path.resolve(__dirname, './input.js')

describe(FOLDER, () => {
  test('rollup', async () => {
    const code = await getRollupOutput(INPUT_FILE)
    expect(code).toMatchSnapshot()
  })
  test('webpack + terser', async () => {
    const result = await getWebpackExtractedCode(INPUT_FILE)
    expect(result).toMatchSnapshot()
  })
  test('terser', async () => {
    const result = await runTerserOnCombinedCode(INPUT_FILE)
    expect(result).toMatchSnapshot()
  })
})
