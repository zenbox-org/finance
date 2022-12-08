import { z } from 'zod'
import { BigNumber } from 'libs/utils/bignumber'

export const TotalSchema = z.instanceof(BigNumber)

export type Total = z.infer<typeof TotalSchema>

export function getTotalUid(total: Total) {
  return total.toString()
}
