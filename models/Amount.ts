import { z } from 'zod'
import { BigNumber } from 'zenbox-util/bignumber'
import { refinePositiveBigNumber, refinePositiveBigNumberParams, refinePositiveOrZeroBigNumber, refinePositiveOrZeroBigNumberParams } from 'zenbox-util/zod.bignumber'

export const AmountSchema = z.instanceof(BigNumber)
  .refine(refinePositiveOrZeroBigNumber, refinePositiveOrZeroBigNumberParams)
  .describe('Amount')

export const AmountPositiveSchema = z.instanceof(BigNumber)
  .refine(refinePositiveBigNumber, refinePositiveBigNumberParams)

export type Amount = z.infer<typeof AmountSchema>

export type AmountPositive = z.infer<typeof AmountPositiveSchema>

export function getAmountUid(amount: Amount) {
  return amount.toString()
}

export function parseAmount(amount: BigNumber.Value) {
  return AmountSchema.parse(new BigNumber(amount))
}
