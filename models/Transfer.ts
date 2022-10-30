import { z } from 'zod'
import { WalletSchema } from './Wallet'
import { AmountSchema } from './Amount'
import { Tasset, TassetSchema } from './Tasset'
import { TimeValueMap } from '../../../models/Config'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { toUidFromSchema } from 'zenbox-util/uid'
import { NotesSchema } from '../../generic/models/Notes'
import { IdSchema } from '../../generic/models/Id'
import { isEqualByNetworkUid } from './Network'
import { sumBags } from './Bag/sumBags'

export const TransferSchema = z.object({
  id: IdSchema,
  amount: AmountSchema,
  asset: TassetSchema,
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
  return toUidFromSchema(transferUid, TransferUidSchema)
}

export function sumTransfers(transfers: Transfer[], asset: Tasset, timeValueMap: TimeValueMap) {
  return sumBags(transfers, asset, timeValueMap)
}
