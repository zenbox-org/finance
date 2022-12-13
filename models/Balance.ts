import { z } from 'zod'
import { AmountSchema } from './Amount'
import { AssetSchema } from './Asset'
import { WalletSchema } from './Wallet'

export const BalanceSchema = z.object({
  wallet: WalletSchema,
  asset: AssetSchema,
  amount: AmountSchema,
})

export type Balance = z.infer<typeof BalanceSchema>
