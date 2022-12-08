import { Transfer } from '../Transfer'
import { allBlockchainExplorers } from '../../../blockchain/data/allBlockchainExplorers'
import { isEqualByNetworkUid } from '../Network'
import { fromBlockchainNetworkToFinanceNetwork } from '../../../blockchain/models/BlockchainNetwork/fromBlockchainNetworkToFinanceNetwork'
import { ensure } from 'libs/utils/ensure'

export function fromTransferToBlockchainExplorer(transfer: Transfer) {
  return ensure(allBlockchainExplorers.find(e => {
    const network = fromBlockchainNetworkToFinanceNetwork(e.network)
    return isEqualByNetworkUid(network, transfer.from.network)
  }))
}
