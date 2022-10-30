import { Transfer } from '../Transfer'
import { fromTransferToBlockchainExplorer } from './fromTransferToBlockchainExplorer'
import { getTransactionUrl } from '../../../blockchain/models/BlockchainExplorer/getTransactionUrl'

export function fromTransferToTransactionUrl(transfer: Transfer) {
  const explorer = fromTransferToBlockchainExplorer(transfer)
  const hash = transfer.id
  return getTransactionUrl(explorer)(hash)
}
