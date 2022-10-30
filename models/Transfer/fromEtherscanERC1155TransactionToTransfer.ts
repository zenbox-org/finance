import { GetAssetByContractUid } from '../Asset/getAssetByContractUid'
import { EtherscanERC1155Transaction } from '../../../etherscan/models/EtherscanERC1155Transaction'
import { validateTransfer } from '../Transfer'
import { fromEtherscanAbstractTransactionToAbstractTransfer } from './fromEtherscanAbstractTransactionToAbstractTransfer'
import { stub } from 'zenbox-util/todo'
import { Tasset } from '../Tasset'

export const fromEtherscanERC1155TransactionToTransfer = (getAsset: GetAssetByContractUid) => (transaction: EtherscanERC1155Transaction) => {
  const abstractTransfer = fromEtherscanAbstractTransactionToAbstractTransfer(transaction)
  const asset = stub<Tasset>('ERC1155 has multiple assets associated with a single contract, so we can not use getAsset(transaction.contract)')
  // const asset = getAsset(transaction.contract)
  return validateTransfer({
    ...abstractTransfer,
    asset,
  })
}
