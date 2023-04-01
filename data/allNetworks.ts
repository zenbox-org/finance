import { getFinder, getInserter } from 'libs/utils/zod'
import { Network, NetworkSchema, parseNetworkUid } from '../models/Network'

export const allNetworks: Network[] = []

export const addNetwork = getInserter('Network', NetworkSchema, parseNetworkUid, allNetworks)

export const findNetwork = getFinder(parseNetworkUid, allNetworks)

export const BlockchainBitcoinMainnet = addNetwork({
  id: 'BlockchainBitcoinMainnet',
})

export const BlockchainEthereumMainnet = addNetwork({
  id: 'BlockchainEthereumMainnet',
})

export const BlockchainBNBChainMainnet = addNetwork({
  id: 'BlockchainBNBChainMainnet',
})

addNetwork({
  id: 'Qiwi',
})

addNetwork({
  id: 'SWIFT',
})

addNetwork({
  id: 'Binance',
})
