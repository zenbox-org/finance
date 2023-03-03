import { BigNumber } from 'libs/utils/BigNumber.utils'
import { bag, Bag } from '../Bag'

export function multiplyBag(b: Bag, factor: BigNumber.Value) {
  return bag(b.amount.multipliedBy(factor), b.asset)
}
