import { Amount } from '../Amount'
import { sumBigNumbers } from 'libs/utils/bignumber'

export function sumAmountables(amountables: { amount: Amount }[]) {
  return sumBigNumbers(amountables.map(b => b.amount))
}
