import { Bag } from '../Bag'
import { ensure } from 'libs/utils/ensure'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'

/**
 * Value is subjective, so we convert all assets to time
 */
export function toTime(bag: Bag, timeValueMap: TimeValueMap) {
  const timeDividedByMoney = ensure(timeValueMap[bag.asset.ticker], new Error(`Can't find time value for ${bag.asset.ticker}`))
  return timeDividedByMoney.multipliedBy(bag.amount)
}
