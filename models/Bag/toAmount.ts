import { TimeValueMap } from '../../../generic/models/TimeValueMap'
import { Amount } from '../Amount'
import { Asset } from '../Asset'
import { Bag } from '../Bag'

export function toAmount(amount: Amount, from: Asset, to: Asset, timeValueMap: TimeValueMap) {
  if (from.ticker === to.ticker) return amount
  const valueFrom = timeValueMap[from.ticker]
  const valueTo = timeValueMap[to.ticker]
  if (!valueFrom) throw new Error(`Can't find time value for ${from.ticker}`)
  if (!valueTo) throw new Error(`Can't find time value for ${to.ticker}`)
  return valueFrom.multipliedBy(amount).dividedBy(valueTo)
}

export function toAmountBag(from: Bag, to: Bag, timeValueMap: TimeValueMap) {
  return toAmount(from.amount, from.asset, to.asset, timeValueMap)
}
