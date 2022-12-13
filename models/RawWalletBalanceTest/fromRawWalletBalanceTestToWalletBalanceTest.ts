import { Network } from '../Network'
import { RawWalletBalanceTest } from '../RawWalletBalanceTest'
import { parseWalletUid } from '../Wallet'
import { getById } from '../../../generic/models/Id'
import { Asset, parseAssetUid } from '../Asset'
import { parseWalletBalanceTest } from '../WalletBalanceTest'
import { getByTicker } from '../Ticker'

export const fromRawWalletBalanceTestToWalletBalanceTest = (networks: Network[]) => (assets: Asset[]) => ($test: RawWalletBalanceTest) => {
  const { networkId, walletName, assetTicker } = $test
  const network = getById(networks, networkId)
  const asset = getByTicker(assets, assetTicker)
  const walletUid = parseWalletUid({ name: walletName, network })
  const assetUid = parseAssetUid(asset)
  return parseWalletBalanceTest({
    ...$test,
    walletUid,
    assetUid,
  })
}
