import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { AssetSchema, AssetUidSchema } from './Asset'
import { TotalSchema } from './Total'
import { WalletSchema, WalletUidSchema } from './Wallet'

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
  return TallyUidSchema.parse(tallyUid)
}
