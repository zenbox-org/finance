import { z } from 'zod'
import { toUidFromSchema } from 'libs/utils/uid'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { WalletSchema, WalletUidSchema } from './Wallet'
import { AssetUidSchema, AssetSchema } from './Asset'
import { TotalSchema } from './Total'

export const TallySchema = z.object({
  wallet: WalletSchema,
  asset: AssetSchema,
  total: TotalSchema,
})

export const TallysSchema = z.array(TallySchema)
  .superRefine(getDuplicatesRefinement('Tally', getTallyUid))

export const TallyUidSchema = z.object({
  wallet: WalletUidSchema,
  asset: AssetUidSchema,
})

export type Tally = z.infer<typeof TallySchema>

export type TallyUid = z.infer<typeof TallyUidSchema>

export function validateTally(tally: Tally): Tally {
  return TallySchema.parse(tally)
}

export function validateTallys(tallys: Tally[]): Tally[] {
  return TallysSchema.parse(tallys)
}

export function getTallyUid(tallyUid: TallyUid) {
  return toUidFromSchema(tallyUid, TallyUidSchema)
}
