import { z } from 'zod'

export const FeeTypeSchema = z.enum(['absolute', 'percentage'])

export type FeeType = z.infer<typeof FeeTypeSchema>
