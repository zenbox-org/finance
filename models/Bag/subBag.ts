import { ensure } from '../../../utils/ensure'
import { isEqualAsset } from '../Asset'
import { bag, Bag } from '../Bag'

export function subBag(a: Bag, b: Bag) {
  ensure(isEqualAsset(a.asset)(b.asset))
  return bag(a.amount.minus(b.amount), a.asset)
}
