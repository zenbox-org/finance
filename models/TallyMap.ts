import { Tally } from '../../generic/models/Tally'
import { AssetUid } from './Asset'
import { Total } from './Total'
import { WalletUid } from './Wallet'

export type TransferTallyKey = { walletUid: WalletUid, assetUid: AssetUid }

export type TransferTally = Tally<TransferTallyKey, Total>

export function toString(tally: TransferTally) {
  const { key, value } = tally
  const { walletUid, assetUid } = key
  return `${walletUid.name} on ${walletUid.network.id} - ${assetUid.id} - ${value.toString()}`
}
