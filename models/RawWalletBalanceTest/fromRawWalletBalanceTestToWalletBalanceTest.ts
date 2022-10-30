import { Network } from '../Network'
import { RawWalletBalanceTest } from '../RawWalletBalanceTest'
import { parseWalletUid } from '../Wallet'
import { getById } from '../../../generic/models/Id'
import { Tasset, parseTassetUid } from '../Tasset'
import { parseWalletBalanceTest } from '../WalletBalanceTest'
import { getByTicker } from '../Ticker'

export const fromRawWalletBalanceTestToWalletBalanceTest = (networks: Network[]) => (assets: Tasset[]) => ($test: RawWalletBalanceTest) => {
  const { networkId, walletName, assetTicker } = $test
  const network = getById(networks, networkId)
  const asset = getByTicker(assets, assetTicker)
  const walletUid = parseWalletUid({ name: walletName, network })
  const assetUid = parseTassetUid(asset)
  return parseWalletBalanceTest({
    ...$test,
    walletUid,
    assetUid,
  })
}
