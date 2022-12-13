import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { IdSchema } from '../../generic/models/Id'
import { NotesSchema } from '../../generic/models/Notes'
import { TimeValueMap } from '../../generic/models/TimeValueMap'
import { AmountSchema } from './Amount'
import { Asset, AssetSchema } from './Asset'
import { sumBags } from './Bag/sumBags'
import { isEqualByNetworkUid } from './Network'
import { WalletSchema } from './Wallet'

export const TransferSchema = z.object({
  id: IdSchema,
  amount: AmountSchema,
  asset: AssetSchema,
  from: WalletSchema,
  to: WalletSchema,
  date: z.date(),
  notes: NotesSchema,
})
  .refine(value => isEqualByNetworkUid(value.from.network, value.to.network), {
    message: '"From wallet network" must be equal to "To wallet network"',
  })
  // .refine(value => value.to.asset.name === value.asset.name, {
  //   message: 'To wallet asset must match transfer asset',
  // })

export const TransfersSchema = z.array(TransferSchema)
  .superRefine(getDuplicatesRefinement('Transfer', getTransferUid))

export const TransferUidSchema = TransferSchema.innerType().pick({
  id: true,
})

export type Transfer = z.infer<typeof TransferSchema>

export type TransferUid = z.infer<typeof TransferUidSchema>

export function validateTransfer(transfer: Transfer): Transfer {
  return TransferSchema.parse(transfer)
}

export function validateTransfers(transfers: Transfer[]): Transfer[] {
  return TransfersSchema.parse(transfers)
}

export function getTransferUid(transferUid: TransferUid) {
  return TransferUidSchema.parse(transferUid)
}

export function sumTransfers(transfers: Transfer[], asset: Asset, timeValueMap: TimeValueMap) {
  return sumBags(transfers, asset, timeValueMap)
}
