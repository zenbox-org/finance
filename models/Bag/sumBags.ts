import { sumBigNumbers } from 'libs/utils/BigNumber.utils'
import { ensure } from 'libs/utils/ensure'
import { isEqual } from 'lodash-es'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'
import { Asset } from '../Asset'
import { bag, Bag } from '../Bag'
import { toAmount } from './toAmount'
import { toTime } from './toTime'

export const sumBags = (timeValueMap: TimeValueMap) => (asset: Asset) => (bags: Bag[]) => bag(
  sumBigNumbers(bags.map(b => toAmount(b.amount, b.asset, asset, timeValueMap))),
  asset,
)

export const sumBagsWithSameAsset = (asset: Asset) => (bags: Bag[]) => {
  ensure(bags.every(b => isEqual(b.asset, asset)), new Error('Bags must have the same asset'))
  return bag(
    sumBigNumbers(bags.map(b => b.amount)),
    asset,
  )
}

export const sumBagsToTime = (timeValueMap: TimeValueMap) => (bags: Bag[]) => sumBigNumbers(bags.map(b => toTime(b, timeValueMap)))
