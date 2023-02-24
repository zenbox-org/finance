import { z } from 'zod'
import { AmountSchema } from './Amount'
import { AssetSchema } from './Asset'
import { WalletSchema } from './Wallet'

export const FintSchema = z.object({
  wallet: WalletSchema,
  asset: AssetSchema,
  amount: AmountSchema,
})

export type Fint = z.infer<typeof FintSchema>
