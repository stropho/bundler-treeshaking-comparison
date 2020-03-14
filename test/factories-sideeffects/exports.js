/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
export const reexport = 'reexport'
export const functionFactoryWithSideeffect = (constantValue) =>
  ++someGlobalVar && (() => constantValue)

export const unusedStringGetterCreatedWithSideeffect =
  functionFactoryWithSideeffect('unusedStringGetterCreatedWithSideeffect')
export const unusedStringGetterCreatedWithSideeffectAndPureAnnotation =
  /* #__PURE__ */ functionFactoryWithSideeffect('unusedStringGetterCreatedWithSideeffectAndPureAnnotation')
