import { z } from 'zod'
import { BigNumber } from 'zenbox-util/bignumber'

export const PriceSchema = z.instanceof(BigNumber)
  .refine(value => !value /* check for undefined */ || value.isGreaterThanOrEqualTo(0), {
    message: 'Must be positive or zero',
  })

export type Price = z.infer<typeof PriceSchema>
