import { bag, Bag } from '../Bag'
import { BigNumber } from 'libs/utils/bignumber'

export function multiplyBag(b: Bag, factor: BigNumber.Value) {
  return bag(b.amount.multipliedBy(factor), b.asset)
}
