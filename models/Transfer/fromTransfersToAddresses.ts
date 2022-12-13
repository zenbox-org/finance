import { flatten, uniq } from 'lodash-es'
import { Address } from '../../../ethereum/models/Address'
import { Transfer } from '../Transfer'

export function fromTransfersToAddresses(transfers: Transfer[]) {
  return uniq<Address>(flatten(transfers.map(t => ([t.from.name, t.to.name]))))
}
