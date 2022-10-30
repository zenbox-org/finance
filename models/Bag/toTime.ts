import { Config, TimeValueMap } from '../../../../models/Config'
import { Bag } from '../Bag'
import { ensure } from 'zenbox-util/ensure'

/**
 * Value is subjective, so we convert all assets to time
 */
export function toTime(bag: Bag, timeValueMap: TimeValueMap) {
  const timeDividedByMoney = ensure(timeValueMap[bag.asset.ticker], new Error(`Can't find time value for ${bag.asset.ticker}`))
  return timeDividedByMoney.multipliedBy(bag.amount)
}

export function toTimeC(bag: Bag, context: Config) {
  return toTime(bag, context.timeValueMap)
}
