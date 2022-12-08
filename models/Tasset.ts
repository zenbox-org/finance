import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { TickerSchema } from './Ticker'
import { IdSchema } from '../../generic/models/Id'
import { NameSchema } from '../../generic/models/Name'
import { NotesSchema } from '../../generic/models/Notes'
import { isEqual } from 'lodash-es'

/**
 * Tasset is a tangible asset
 *
 * Example groups:
 * - Coins
 * - Tokens
 * - Shares
 * - Currencies
 *
 * Non-example groups:
 * - NFTs (because they are non-fungible)
 * - Houses (because they are immobile)
 * - Song rights (because they are intangible)
 */

export const TassetSchema = z.object({
  id: IdSchema,
  name: NameSchema,
  ticker: TickerSchema,
  notes: NotesSchema,
}).describe('Tasset')

export const TassetsSchema = z.array(TassetSchema)
  .superRefine(getDuplicatesRefinement('Tasset', parseTassetUid))

export const TassetUidSchema = TassetSchema.pick({
  id: true,
})

export type Tasset = z.infer<typeof TassetSchema>

export type TassetUid = z.infer<typeof TassetUidSchema>

export function parseTasset(tasset: Tasset): Tasset {
  return TassetSchema.parse(tasset)
}

export function parseTassets(tassets: Tasset[]): Tasset[] {
  return TassetsSchema.parse(tassets)
}

export function parseTassetUid(tassetUid: TassetUid): TassetUid {
  return TassetUidSchema.parse(tassetUid)
}

export interface WithTasset { asset: Tasset }

export const byTasset = (tasset: Tasset) => (object: WithTasset) => isEqual(object.asset, tasset)
