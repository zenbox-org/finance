import { Network, NetworkSchema, parseNetworkUid } from '../models/Network'
import { getFinder, getInserter } from 'zenbox-util/zod'

export const allNetworks: Network[] = []

export const addNetwork = getInserter('Network', NetworkSchema, parseNetworkUid, allNetworks)

export const findNetwork = getFinder(parseNetworkUid, allNetworks)

export const BlockchainBitcoinMainnet = addNetwork({
  id: 'BlockchainBitcoinMainnet',
})

export const BlockchainEthereumMainnet = addNetwork({
  id: 'BlockchainEthereumMainnet',
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
