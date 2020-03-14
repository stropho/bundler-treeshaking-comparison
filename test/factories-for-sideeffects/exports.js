/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
export const reexport = 'reexport'
export const functionWithSideeffectFactory = (constantValue) =>
  () => ++someGlobalVar && constantValue

// unless it is called, there is no sideeffect happening
export const usedStringGetterWithSideeffect = functionWithSideeffectFactory('usedStringGetterWithSideeffect')

// triggering side effect
export const unusedResultOfCreatedFunctionWithSideeffect = usedStringGetterWithSideeffect('unusedResultOfCreatedFunctionWithSideeffect')

// triggering side effect - with /* #__PURE__ */
export const unusedResultOfCreatedFunctionWithSideeffectAndPureAnnotation =
  /* #__PURE__ */ usedStringGetterWithSideeffect(
    'unusedResultOfCreatedFunctionWithSideeffectAndPureAnnotation',
  )

// ---------------------------------------------
export const unusedStringGetterWithSideeffect =
  functionWithSideeffectFactory(
    'unusedStringGetterWithSideeffect',
  )
