import { byUid } from 'libs/utils/uid'
import { Url } from '../../../generic/models/Url'
import { Amount } from '../Amount'
import { Asset } from '../Asset'
import { parsePricePointUid, PricePoint } from '../PricePoint'

export function convertAmount(points: PricePoint[], source: Url, date: Date, from: Asset, to: Asset, amount: Amount) {
  const pointFromTo = points.find(byUid(parsePricePointUid, {
    base: from,
    quote: to,
    source,
    date,
  }))
  if (pointFromTo) {
    return amount.multipliedBy(pointFromTo.price)
  }
  const pointToFrom = points.find(byUid(parsePricePointUid, {
    base: to,
    quote: from,
    source,
    date,
  }))
  if (pointToFrom) {
    return amount.dividedBy(pointToFrom.price)
  }
  throw new PricePointNotFoundError(source, date, from, to)
}

class PricePointNotFoundError extends Error {
  constructor(public readonly source: Url, public readonly date: Date, public readonly from: Asset, public readonly to: Asset) {
    super(`No price point found for ${from.id} - ${to.id} pair from ${source} at ${date.toISOString()}`)
  }
}
