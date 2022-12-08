import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { WalletUidSchema } from './Wallet'
import { TassetUidSchema } from './Tasset'
import { AmountSchema } from './Amount'

export const WalletBalanceTestSchema = z.object({
  walletUid: WalletUidSchema,
  assetUid: TassetUidSchema,
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
