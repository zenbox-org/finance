import { Address } from '../../../ethereum/models/Address'
import { Asset } from '../Asset'
import { Network } from '../Network'

/**
 * Network is finance/models/Network
 * Address is ethereum/models/Address
 */
export type GetAssetByNetworkAndContractAddress = (network: Network, contractAddress?: Address) => Asset
