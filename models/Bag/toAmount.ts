import { Tasset } from '../Tasset'
import { Amount } from '../Amount'
import { TimeValueMap } from '../../../../models/Config'

export function toAmount(amount: Amount, from: Tasset, to: Tasset, timeValueMap: TimeValueMap) {
  if (from.ticker === to.ticker) return amount
  const valueFrom = timeValueMap[from.ticker]
  const valueTo = timeValueMap[to.ticker]
  if (!valueFrom) throw new Error(`Can't find time value for ${from.ticker}`)
  if (!valueTo) throw new Error(`Can't find time value for ${to.ticker}`)
  return valueFrom.multipliedBy(amount).dividedBy(valueTo)
}
