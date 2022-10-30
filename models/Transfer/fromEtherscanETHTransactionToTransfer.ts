import { validateTransfer } from '../Transfer'
import { fromEtherscanAbstractTransactionToAbstractTransfer } from './fromEtherscanAbstractTransactionToAbstractTransfer'
import { ETH } from '../../data/allTassets'
import { EtherscanETHTransaction, isCleanEtherscanETHTransaction } from '../../../etherscan/models/EtherscanETHTransaction'
import { fromEtherscanEthTransactionToEtherscanAbstractTransaction } from '../../../etherscan/models/EtherscanAbstractTransaction/fromEtherscanEthTransactionToEtherscanAbstractTransaction'

export const fromEtherscanETHTransactionToTransfer = (transaction: EtherscanETHTransaction) => {
  if (!isCleanEtherscanETHTransaction(transaction)) throw new Error('Cannot convert a dirty transaction')
  const abstractTransaction = fromEtherscanEthTransactionToEtherscanAbstractTransaction(transaction)
  const abstractTransfer = fromEtherscanAbstractTransactionToAbstractTransfer(abstractTransaction)
  return validateTransfer({
    ...abstractTransfer,
    asset: ETH,
  })
}
