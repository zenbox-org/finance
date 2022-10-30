import { z } from 'zod'
import { BigNumber } from 'zenbox-util/bignumber'

export const TotalSchema = z.instanceof(BigNumber)

export type Total = z.infer<typeof TotalSchema>

export function getTotalUid(total: Total) {
  return total.toString()
}
