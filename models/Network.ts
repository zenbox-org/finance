import { isEqualByD } from 'libs/utils/lodash'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { z } from 'zod'
import { IdSchema } from '../../generic/models/Id'

export const NetworkSchema = z.object({
  id: IdSchema,
})

export const NetworksSchema = z.array(NetworkSchema)
  .superRefine(getDuplicatesRefinement('Network', parseNetworkUid))

export const NetworkUidSchema = NetworkSchema.pick({
  id: true,
})

export type Network = z.infer<typeof NetworkSchema>

export type NetworkUid = z.infer<typeof NetworkUidSchema>

export function parseNetwork(network: Network): Network {
  return NetworkSchema.parse(network)
}

export function parseNetworks(networks: Network[]): Network[] {
  return NetworksSchema.parse(networks)
}

export function parseNetworkUid(networkUid: NetworkUid): NetworkUid {
  return NetworkUidSchema.parse(networkUid)
}

export function isEqualByNetworkUid(a: Network, b: Network) {
  return isEqualByD(a, b, parseNetworkUid)
}
