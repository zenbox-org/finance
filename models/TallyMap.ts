import { WalletUid } from './Wallet'
import { TassetUid } from './Tasset'
import { Tally } from '../../generic/models/Tally'
import { Total } from './Total'

export type TransferTallyKey = { walletUid: WalletUid, assetUid: TassetUid }

export type TransferTally = Tally<TransferTallyKey, Total>

export function toString(tally: TransferTally) {
  const { key, value } = tally
  const { walletUid, assetUid } = key
  return `${walletUid.name} on ${walletUid.network.id} - ${assetUid.id} - ${value.toString()}`
}
