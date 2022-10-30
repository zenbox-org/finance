import { z } from 'zod'
import { AmountSchema } from './Amount'
import { WalletSchema } from './Wallet'
import { TassetSchema } from './Tasset'

export const BalanceSchema = z.object({
  wallet: WalletSchema,
  asset: TassetSchema,
  amount: AmountSchema,
})

export type Balance = z.infer<typeof BalanceSchema>
