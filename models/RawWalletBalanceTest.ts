import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { AssetSchema } from './Asset'
import { NetworkSchema } from './Network'
import { WalletSchema } from './Wallet'
import { WalletBalanceTestSchema } from './WalletBalanceTest'

export const RawWalletBalanceTestSchema = WalletBalanceTestSchema.omit({
  walletUid: true,
  assetUid: true,
}).extend({
  networkId: NetworkSchema.shape.id,
  walletName: WalletSchema.shape.name,
  assetTicker: AssetSchema.shape.ticker,
})

export const RawWalletBalanceTestsSchema = z.array(RawWalletBalanceTestSchema)
  .superRefine(getDuplicatesRefinement('RawWalletBalanceTest', parseRawWalletBalanceTestUid))

export const RawWalletBalanceTestUidSchema = RawWalletBalanceTestSchema.pick({
  networkId: true,
  walletName: true,
  assetTicker: true,
})

export type RawWalletBalanceTest = z.infer<typeof RawWalletBalanceTestSchema>

export type RawWalletBalanceTestUid = z.infer<typeof RawWalletBalanceTestUidSchema>

export function parseRawWalletBalanceTest(test: RawWalletBalanceTest): RawWalletBalanceTest {
  return RawWalletBalanceTestSchema.parse(test)
}

export function parseRawWalletBalanceTests(tests: RawWalletBalanceTest[]): RawWalletBalanceTest[] {
  return RawWalletBalanceTestsSchema.parse(tests)
}

export function parseRawWalletBalanceTestUid(testUid: RawWalletBalanceTestUid): RawWalletBalanceTestUid {
  return RawWalletBalanceTestUidSchema.parse(testUid)
}
