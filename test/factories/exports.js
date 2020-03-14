/* eslint-disable operator-linebreak */
export const reexport = 'reexport'
export const functionFactory = (constantValue) => () => constantValue
export const unusedStringGetter = functionFactory('unusedStringGetter')
export const unusedStringGetterWithPureAnnotation =
  /* #__PURE__ */ functionFactory('unusedStringGetterWithPureAnnotation')
