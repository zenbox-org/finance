import { addTallyBigNumber } from '../../../generic/models/Tally/addTally'
import { parseAssetUid } from '../Asset'
import { TransferTally, TransferTallyKey } from '../TallyMap'
import { Transfer } from '../Transfer'
import { parseWalletUid } from '../Wallet'

export function getTallies(transfers: Transfer[]) {
  return transfers.reduce<TransferTally[]>(function (tallies, transfer) {
    const $tallies = addTallyFrom(transfer, tallies)
    const $$tallies = addTallyTo(transfer, tallies)
    return $$tallies
  }, [])
}

function addTallyFrom(transfer: Transfer, tallies: TransferTally[]) {
  const key: TransferTallyKey = { walletUid: parseWalletUid(transfer.from), assetUid: parseAssetUid(transfer.asset) }
  const value = transfer.amount.negated()
  return addTallyBigNumber(tallies, key, value)
}

function addTallyTo(transfer: Transfer, tallies: TransferTally[]) {
  const key: TransferTallyKey = { walletUid: parseWalletUid(transfer.to), assetUid: parseAssetUid(transfer.asset) }
  const value = transfer.amount
  return addTallyBigNumber(tallies, key, value)
}
