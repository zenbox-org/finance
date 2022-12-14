import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { AmountSchema } from './Amount'
import { AssetUidSchema } from './Asset'
import { WalletUidSchema } from './Wallet'

export const WalletBalanceTestSchema = z.object({
  walletUid: WalletUidSchema,
  assetUid: AssetUidSchema,
  amountMin: AmountSchema,
  amountMax: AmountSchema,
})

export const WalletBalanceTestsSchema = z.array(WalletBalanceTestSchema)
  .superRefine(getDuplicatesRefinement('WalletBalanceTest', parseWalletBalanceTestUid))

export const WalletBalanceTestUidSchema = WalletBalanceTestSchema.pick({
  walletUid: true,
  assetUid: true,
})

export type WalletBalanceTest = z.infer<typeof WalletBalanceTestSchema>

export type WalletBalanceTestUid = z.infer<typeof WalletBalanceTestUidSchema>

export function parseWalletBalanceTest(walletBalanceTest: WalletBalanceTest): WalletBalanceTest {
  return WalletBalanceTestSchema.parse(walletBalanceTest)
}

export function parseWalletBalanceTests(walletBalanceTests: WalletBalanceTest[]): WalletBalanceTest[] {
  return WalletBalanceTestsSchema.parse(walletBalanceTests)
}

export function parseWalletBalanceTestUid(walletBalanceTestUid: WalletBalanceTestUid): WalletBalanceTestUid {
  return WalletBalanceTestUidSchema.parse(walletBalanceTestUid)
}
