import { sumBigNumbers } from 'libs/utils/bignumber'
import { Amount } from '../Amount'

export function sumAmounts(objects: { amount: Amount }[]) {
  return sumBigNumbers(objects.map(o => o.amount))
}
