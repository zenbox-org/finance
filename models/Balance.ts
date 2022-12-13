import { z } from 'zod'
import { AmountSchema } from './Amount'
import { WalletSchema } from './Wallet'
import { AssetSchema } from './Asset'

export const BalanceSchema = z.object({
  wallet: WalletSchema,
  asset: AssetSchema,
  amount: AmountSchema,
})

export type Balance = z.infer<typeof BalanceSchema>
