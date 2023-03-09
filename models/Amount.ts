import { BigNumber } from 'libs/utils/BigNumber/utils'
import { refinePositiveBigNumber, refinePositiveBigNumberParams, refinePositiveOrZeroBigNumber, refinePositiveOrZeroBigNumberParams } from 'libs/utils/zod.bignumber'
import { z } from 'zod'

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

export interface WithAmount { amount: Amount }

export interface WithAmountGen<Amount> { amount: Amount }
