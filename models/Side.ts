import { z } from 'zod'
import { getArraySchema } from 'libs/utils/zod'
import { identity } from 'lodash-es'

export const SideSchema = z.enum(['Buy', 'Sell']).describe('Side')

export const SidesSchema = getArraySchema(SideSchema, identity)

export type Side = z.infer<typeof SideSchema>

export function parseSide(side: Side): Side {
  return SideSchema.parse(side)
}

export function parseSides(sides: Side[]): Side[] {
  return SidesSchema.parse(sides)
}

export const isEqualSide = (a: Side) => (b: Side) => a === b
