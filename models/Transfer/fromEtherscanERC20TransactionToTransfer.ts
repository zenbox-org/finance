import { GetAssetByContractUid } from '../Asset/getAssetByContractUid'
import { validateTransfer } from '../Transfer'
import { EtherscanERC20Transaction } from '../../../etherscan/models/EtherscanERC20Transaction'
import { fromEtherscanAbstractTransactionToAbstractTransfer } from './fromEtherscanAbstractTransactionToAbstractTransfer'
import { parseContractUid } from '../../../ethereum/models/Contract'
import { EthMainnet } from '../../../blockchain/data/allBlockchainNetworks'

export const fromEtherscanERC20TransactionToTransfer = (getAsset: GetAssetByContractUid) => (transaction: EtherscanERC20Transaction) => {
  const abstractTransfer = fromEtherscanAbstractTransactionToAbstractTransfer(transaction)
  const contractUid = parseContractUid({ address: transaction.contractAddress, network: EthMainnet })
  const asset = getAsset(contractUid)
  return validateTransfer({
    ...abstractTransfer,
    asset,
  })
}
