import { z } from 'zod'
import { AmountSchema } from './Amount'
import { Tasset, TassetSchema, TassetUidSchema } from './Tasset'
import { Config } from '../../../models/Config'
import { toTime } from './Bag/toTime'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { USD } from '../data/allTassets'
import { BigNumber } from 'zenbox-util/bignumber'

export const BagSchema = z.object({
  amount: AmountSchema,
  asset: TassetSchema,
}).describe('Bag')

export const BagsSchema = z.array(BagSchema)
  .superRefine(getDuplicatesRefinement('Bag', parseBagUid))

export const BagUidSchema = z.object({
  amount: BagSchema.shape.amount,
  asset: TassetUidSchema,
})

export type Bag = z.infer<typeof BagSchema>

export type BagUid = z.infer<typeof BagUidSchema>

export function parseBag(bag: Bag): Bag {
  return BagSchema.parse(bag)
}

export function parseBags(bags: Bag[]): Bag[] {
  return BagsSchema.parse(bags)
}

export function parseBagUid(bagUid: BagUid): BagUid {
  return BagUidSchema.parse(bagUid)
}

export function getConverterToTime(project: Config) {
  return (bag: Bag) => toTime(bag, project.timeValueMap).toString()
}

export function bag(amount: BigNumber | number | string, asset: Tasset): Bag {
  return {
    amount: new BigNumber(amount),
    asset,
  }
}

export function bagToString(bag: Bag) {
  return `${bag.amount.toString()} ${bag.asset.ticker}`
}

export const free = bag(0, USD)
