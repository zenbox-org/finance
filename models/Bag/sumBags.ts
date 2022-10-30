import { bag, Bag } from '../Bag'
import { Tasset } from '../Tasset'
import { ensure } from 'zenbox-util/ensure'
import { isEqual } from 'lodash-es'
import { sumBigNumbers } from 'zenbox-util/bignumber'
import { toAmount } from './toAmount'
import { toTime } from './toTime'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'

export function sumBags(bags: Bag[], asset: Tasset, timeValueMap: TimeValueMap) {
  return bag(
    sumBigNumbers(bags.map(b => toAmount(b.amount, b.asset, asset, timeValueMap))),
    asset,
  )
}

export function sumBagsToTime(bags: Bag[], timeValueMap: TimeValueMap) {
  return sumBigNumbers(bags.map(b => toTime(b, timeValueMap)))
}

export function sumBagsWithSameAsset(bags: Bag[], asset: Tasset) {
  ensure(bags.every(b => isEqual(b.asset, asset)), new Error('Bags must have the same asset'))
  return bag(
    sumBigNumbers(bags.map(b => b.amount)),
    asset,
  )
}
