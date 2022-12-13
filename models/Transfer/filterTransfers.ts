import { impl } from 'libs/utils/todo'
import { Person } from '../../../generic/models/Person'
import { Transfer } from '../Transfer'

export function filterIncomingTransfers<T extends Transfer, P extends Person>(transfers: T[], employees: P[]) {
  return filterTransfersByDirection(transfers, employees, 'to')
}

export function filterOutgoingTransfers<T extends Transfer, P extends Person>(transfers: T[], employees: P[]) {
  return filterTransfersByDirection(transfers, employees, 'from')
}

export function filterTransfersByDirection<T extends Transfer, P extends Person>(transfers: T[], employees: P[], direction: 'from' | 'to'): Transfer[] {
  throw impl()
  // return transfers.filter(transfer => {
  //   return transfer[direction].accesses.find(access => {
  //     return employees.includes(access.person as P) && access.types.includes('sendTransfer')
  //   })
  // })
}
