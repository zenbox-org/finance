import { flatten, uniq } from 'lodash-es'
import { Address, AddressSchema } from '../../../ethereum/models/Address'
import { Transfer } from '../Transfer'

export function fromTransfersToAddresses(transfers: Transfer[]) {
  const names = flatten(transfers.map(t => ([t.from.name, t.to.name])))
  return uniq<Address>(names.map(n => AddressSchema.parse(n)))
}
