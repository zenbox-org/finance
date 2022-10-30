import { z } from 'zod'

export const WalletCustodianSchema = z.enum([
  '/Self',
  '/Bank/RussianFederation/VTB',
  '/Bank/RussianFederation/Tinkoff',
  '/Company/Webmoney',
  '/Company/Advcash',
  '/Exchange/Binance',
  '/Exchange/FTX',
])

// console.log('WalletCustodianSchema', WalletCustodianSchema.options)

export type WalletType = z.infer<typeof WalletCustodianSchema>
