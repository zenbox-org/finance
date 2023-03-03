import { BigNumber } from 'libs/utils/BigNumber.utils'
import { z } from 'zod'

export const TotalSchema = z.instanceof(BigNumber)

export type Total = z.infer<typeof TotalSchema>

export function getTotalUid(total: Total) {
  return total.toString()
}
