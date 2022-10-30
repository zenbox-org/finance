import { Transfer } from '../Transfer'
import { TransferTally, TransferTallyKey } from '../TallyMap'
import { parseWalletUid } from '../Wallet'
import { parseTassetUid } from '../Tasset'
import { addTallyBigNumber } from '../../../generic/models/Tally/addTally'

export function getTallies(transfers: Transfer[]) {
  return transfers.reduce<TransferTally[]>(function (tallies, transfer) {
    const $tallies = addTallyFrom(transfer, tallies)
    const $$tallies = addTallyTo(transfer, tallies)
    return $$tallies
  }, [])
}

function addTallyFrom(transfer: Transfer, tallies: TransferTally[]) {
  const key: TransferTallyKey = { walletUid: parseWalletUid(transfer.from), assetUid: parseTassetUid(transfer.asset) }
  const value = transfer.amount.negated()
  return addTallyBigNumber(tallies, key, value)
}

function addTallyTo(transfer: Transfer, tallies: TransferTally[]) {
  const key: TransferTallyKey = { walletUid: parseWalletUid(transfer.to), assetUid: parseTassetUid(transfer.asset) }
  const value = transfer.amount
  return addTallyBigNumber(tallies, key, value)
}
