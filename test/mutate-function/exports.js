export const reexport = 'reexport'

export const unusedFn = () => 'unusedFn'

export const unusedMutatedFn1Prop = () => 'unusedMutatedFn1Prop'
unusedMutatedFn1Prop.unusedMutatedObject1Prop = true

export const unusedMutatedFn2Props = () => 'unusedMutatedFn2Props'
unusedMutatedFn2Props.unusedMutatedObject2Props_foo = true
unusedMutatedFn2Props.unusedMutatedObject2Props_bar = 'bar'

export const unusedMutatedFn3Props = () => 'unusedMutatedFn3Props'
unusedMutatedFn3Props.unusedMutatedObject3Prop_foo = true
unusedMutatedFn3Props.unusedMutatedObject3Prop_bar = 'bar'
unusedMutatedFn3Props.unusedMutatedObject3Prop_baz = { baz: true }

export const unusedMutatedFnViaIife = /* #__PURE__ */ (() => {
  const fn = () => 'fnFromIife'
  fn.foo = true
  fn.bar = 'bar'
  fn.baz = { baz: true }
})()
