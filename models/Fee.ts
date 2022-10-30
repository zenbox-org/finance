import { z } from 'zod'
import { BigNumber } from 'zenbox-util/bignumber'

export const FeeSchema = z.instanceof(BigNumber)
  .refine(value => !value /* check for undefined */ || value.isGreaterThanOrEqualTo(0), {
    message: 'Must be positive or zero',
  })

export const FeePositiveSchema = z.instanceof(BigNumber)
  .refine(value => !value /* check for undefined */ || value.isGreaterThan(0), {
    message: 'Must be positive',
  })

export type Fee = z.infer<typeof FeeSchema>

export type FeePositive = z.infer<typeof FeePositiveSchema>
