import { BigNumber } from 'libs/utils/bignumber'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { USD } from '../data/allAssets'
import { AmountSchema } from './Amount'
import { parseAssetUid, Asset, AssetSchema, AssetUidSchema } from './Asset'

export const BagSchema = z.object({
  amount: AmountSchema,
  asset: AssetSchema,
}).describe('Bag')

export const BagsSchema = getArraySchema(BagSchema, parseBagUid)

export const BagsByAssetSchema = getArraySchema(BagSchema, b => parseAssetUid(b.asset))

export const BagUidSchema = z.object({
  amount: BagSchema.shape.amount,
  asset: AssetUidSchema,
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

export function bag(amount: BigNumber | number | string, asset: Asset): Bag {
  return {
    amount: new BigNumber(amount),
    asset,
  }
}

export function renderBag(bag: Bag) {
  return `${bag.amount.toString()} ${bag.asset.ticker}`
}

export const free = bag(0, USD)
