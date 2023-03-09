import { BigNumber } from 'libs/utils/BigNumber/utils'
import { z } from 'zod'

export const PriceSchema = z.instanceof(BigNumber)
  .refine(value => !value /* check for undefined */ || value.isGreaterThanOrEqualTo(0), {
    message: 'Must be positive or zero',
  })

export type Price = z.infer<typeof PriceSchema>
