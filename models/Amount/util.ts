import { sumBigNumbers } from 'libs/utils/bignumber'
import { Amount } from '../Amount'

export function sumAmountables(amountables: { amount: Amount }[]) {
  return sumBigNumbers(amountables.map(b => b.amount))
}
