import { sumBigNumbers } from 'libs/utils/bignumber'
import { WithAmount } from '../Amount'

export function sumAmounts(objects: WithAmount[]) {
  return sumBigNumbers(objects.map(o => o.amount))
}
