import { parsePricePointUid, PricePoint } from '../PricePoint'
import { Tasset } from '../Tasset'
import { Amount } from '../Amount'
import { Url } from '../../../generic/models/Url'
import { byUid } from 'libs/utils/uid'

export function convertAmount(points: PricePoint[], source: Url, date: Date, from: Tasset, to: Tasset, amount: Amount) {
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
  constructor(public readonly source: Url, public readonly date: Date, public readonly from: Tasset, public readonly to: Tasset) {
    super(`No price point found for ${from.id} - ${to.id} pair from ${source} at ${date.toISOString()}`)
  }
}
