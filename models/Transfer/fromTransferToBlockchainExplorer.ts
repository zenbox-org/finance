import { ensure } from 'libs/utils/ensure'
import { allBlockchainExplorers } from '../../../blockchain/data/allBlockchainExplorers'
import { fromBlockchainNetworkToFinanceNetwork } from '../../../blockchain/models/BlockchainNetwork/fromBlockchainNetworkToFinanceNetwork'
import { isEqualByNetworkUid } from '../Network'
import { Transfer } from '../Transfer'

export function fromTransferToBlockchainExplorer(transfer: Transfer) {
  return ensure(allBlockchainExplorers.find(e => {
    const network = fromBlockchainNetworkToFinanceNetwork(e.network)
    return isEqualByNetworkUid(network, transfer.from.network)
  }))
}
