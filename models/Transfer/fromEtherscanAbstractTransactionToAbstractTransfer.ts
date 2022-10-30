import { parseWallet } from '../Wallet'
import { BlockchainEthereumMainnet } from '../../data/allNetworks'
import { EtherscanAbstractTransaction } from '../../../etherscan/models/EtherscanAbstractTransaction'

export const fromEtherscanAbstractTransactionToAbstractTransfer = (transaction: EtherscanAbstractTransaction) => {
  const id = transaction.hash
  const from = parseWallet({
    name: transaction.from,
    network: BlockchainEthereumMainnet,
  })
  const to = parseWallet({
    name: transaction.to,
    network: BlockchainEthereumMainnet,
  })
  const amount = transaction.amount
  const date = transaction.date
  return {
    id,
    from,
    to,
    amount,
    date,
  }
}
