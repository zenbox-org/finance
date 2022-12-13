import { BigNumber } from 'libs/utils/bignumber'
import { z } from 'zod'

export const TotalSchema = z.instanceof(BigNumber)

export type Total = z.infer<typeof TotalSchema>

export function getTotalUid(total: Total) {
  return total.toString()
}
