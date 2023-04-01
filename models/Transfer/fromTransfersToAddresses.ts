import { uniq } from 'lodash-es'
import { Transfer } from '../Transfer'

export function fromTransfersToAddresses(transfers: Transfer[]) {
  return uniq(transfers.flatMap(t => [t.from.name, t.to.name]))
}
