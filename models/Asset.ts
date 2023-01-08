import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { IdSchema } from '../../generic/models/Id'
import { NameSchema } from '../../generic/models/Name'
import { NotesSchema } from '../../generic/models/Notes'
import { isEqualByDC } from '../../utils/lodash'
import { TickerSchema } from './Ticker'

/**
 * In `libs/finance`, Asset is a model of a financial asset (a fungible object that can be bought & sold). Non-financial assets are modelled in other libs.
 *
 * Example groups:
 * - Coins
 * - Tokens
 * - Shares
 * - Currencies
 *
 * Counterexample groups:
 * - NFTs (because they are non-fungible)
 * - Houses (because they are immobile)
 * - Song rights (because they are intangible)
 */

export const AssetSchema = z.object({
  id: IdSchema,
  name: NameSchema,
  ticker: TickerSchema,
  notes: NotesSchema,
}).describe('Asset')

export const AssetsSchema = z.array(AssetSchema)
  .superRefine(getDuplicatesRefinement('Asset', parseAssetUid))

export const AssetUidSchema = AssetSchema.pick({
  id: true,
})

export type Asset = z.infer<typeof AssetSchema>

export type AssetUid = z.infer<typeof AssetUidSchema>

export function parseAsset(asset: Asset): Asset {
  return AssetSchema.parse(asset)
}

export function parseAssets(assets: Asset[]): Asset[] {
  return AssetsSchema.parse(assets)
}

export function parseAssetUid(assetUid: AssetUid): AssetUid {
  return AssetUidSchema.parse(assetUid)
}

export const isEqualAsset = isEqualByDC(parseAssetUid)

export interface WithAsset { asset: Asset }

export const byAsset = (asset: Asset) => (object: WithAsset) => isEqualAsset(asset)(object.asset)
