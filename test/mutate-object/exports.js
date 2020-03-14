export const reexport = 'reexport'

export const unusedObjectLiteral = { prop: 'unusedObjectLiteral' }

export const unusedMutatedObject1Prop = { prop: 'unusedMutatedObject' }
unusedMutatedObject1Prop.unusedMutatedObject1Prop = true

export const unusedMutatedObject2Props = { prop: 'unusedMutatedObject' }
unusedMutatedObject2Props.unusedMutatedObject2Props_foo = true
unusedMutatedObject2Props.unusedMutatedObject2Props_bar = 'bar'

export const unusedMutatedObject3Props = { prop: 'unusedMutatedObject' }
unusedMutatedObject3Props.unusedMutatedObjectProp_foo = true
unusedMutatedObject3Props.unusedMutatedObjectProp_bar = 'bar'
unusedMutatedObject3Props.unusedMutatedObjectProp_baz = { baz: true }
