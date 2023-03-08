import { uniq } from 'lodash-es'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'
import { Bag } from '../Bag'
import { toAmount } from './toAmount'

export function isLessThanBag(a: Bag, b: Bag, timeValueMap: TimeValueMap) {
  const $aPrice = a.amount
  const $bPrice = toAmount(b.amount, b.asset, a.asset, timeValueMap)
  return $aPrice.isLessThan($bPrice)
}

export function isGreaterThanBag(a: Bag, b: Bag, timeValueMap: TimeValueMap) {
  const $aPrice = a.amount
  const $bPrice = toAmount(b.amount, b.asset, a.asset, timeValueMap)
  return $aPrice.isGreaterThan($bPrice)
}

export function isLessThanOrEqualToBag(a: Bag, b: Bag, timeValueMap: TimeValueMap) {
  const $aPrice = a.amount
  const $bPrice = toAmount(b.amount, b.asset, a.asset, timeValueMap)
  return $aPrice.isLessThanOrEqualTo($bPrice)
}

export function isGreaterThanOrEqualToBag(a: Bag, b: Bag, timeValueMap: TimeValueMap) {
  const $aPrice = a.amount
  const $bPrice = toAmount(b.amount, b.asset, a.asset, timeValueMap)
  return $aPrice.isGreaterThanOrEqualTo($bPrice)
}

export const isGreaterThanOrEqualToAndLessThanOrEqualToBag = (timeValueMap: TimeValueMap) => (lower: Bag, upper: Bag) => (value: Bag) => {
  return isGreaterThanOrEqualToBag(value, lower, timeValueMap) && isLessThanOrEqualToBag(value, upper, timeValueMap)
}

export function isSameAsset(bags: Bag[]) {
  const assetIds = bags.map(b => b.asset.id)
  return uniq(assetIds).length <= 1
}
