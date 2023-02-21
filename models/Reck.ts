import { z } from 'zod'
import { AmountSchema } from './Amount'
import { AssetSchema } from './Asset'
import { WalletSchema } from './Wallet'

export const ReckSchema = z.object({
  wallet: WalletSchema,
  asset: AssetSchema,
  amount: AmountSchema,
})

export type Reck = z.infer<typeof ReckSchema>
