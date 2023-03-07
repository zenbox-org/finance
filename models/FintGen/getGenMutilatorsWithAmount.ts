import { BasicArithmetic } from '../../../utils/arithmetic'
import { WithAmountGen } from '../Amount'

export const getGenMutilatorsWithAmount = <Amount>(arithmetic: BasicArithmetic<Amount>) => {
  type WA = WithAmountGen<Amount>
  type A = Amount
  const { add, sub, mul, div } = arithmetic
  return {
    addB: (delta: A) => (obj: WA) => { obj.amount = add(obj.amount, delta) },
    subB: (delta: A) => (obj: WA) => { obj.amount = sub(obj.amount, delta) },
    mulB: (coefficient: A) => (obj: WA) => { obj.amount = mul(obj.amount, coefficient) },
    divB: (coefficient: A) => (obj: WA) => { obj.amount = div(obj.amount, coefficient) },
    sendB: (delta: A) => (from: WA, to: WA) => {
      from.amount = sub(from.amount, delta)
      to.amount = add(to.amount, delta)
    },
  }
}
