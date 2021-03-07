// eslint-disable-next-line import/no-named-as-default
import Operator from "./modules/operator"
import operatorJson from "./operators.json"

// type definition for exported object
type OperatorObject = Record<keyof typeof operatorJson, ReturnType<typeof Operator>>

// create new object with the keys of the JSON object
const output = Object.keys(operatorJson)
  // map the Operator() object to each item
  .map((op) => Operator(op, operatorJson[op]))
  // reassign the item with the id of the operator
  // eslint-disable-next-line unicorn/no-array-reduce
  .reduce((object, op) => {
    object[op.id] = op
    return object
  }, {} as OperatorObject)

export = output
