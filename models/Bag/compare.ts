import { toAmount } from './toAmount'
import { Bag } from '../Bag'
import { uniq } from 'lodash-es'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'

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

export function isSameAsset(bags: Bag[]) {
  const assetIds = bags.map(b => b.asset.id)
  return uniq(assetIds).length <= 1
}
