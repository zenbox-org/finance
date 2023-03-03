import { sumBigNumbers } from 'libs/utils/BigNumber.utils'
import { WithAmount } from '../Amount'

export function sumAmounts(objects: WithAmount[]) {
  return sumBigNumbers(objects.map(o => o.amount))
}
