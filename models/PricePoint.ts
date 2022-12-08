import { z } from 'zod'
import { getDuplicatesRefinement } from 'libs/utils/zod'
import { PriceSchema } from './Price'
import { TassetUidSchema, TassetSchema } from './Tasset'
import { UrlSchema } from '../../generic/models/Url'
import { isEqual } from 'lodash-es'

export const PricePointSchema = z.object({
  base: TassetSchema,
  quote: TassetSchema,
  price: PriceSchema, // quote amount `dividedBy` base amount
  date: z.date(),
  source: UrlSchema,
})

export const PricePointsSchema = z.array(PricePointSchema)
  .superRefine(getDuplicatesRefinement('PricePoint', parsePricePointUid))

export const PricePointUidSchema = z.object({
  base: TassetUidSchema,
  quote: TassetUidSchema,
  date: PricePointSchema.shape.date,
  source: PricePointSchema.shape.source,
})

export type PricePoint = z.infer<typeof PricePointSchema>

export type PricePointUid = z.infer<typeof PricePointUidSchema>

export function parsePricePoint(point: PricePoint): PricePoint {
  return PricePointSchema.parse(point)
}

export function parsePricePoints(points: PricePoint[]): PricePoint[] {
  return PricePointsSchema.parse(points)
}

export function parsePricePointUid(pointUid: PricePointUid): PricePointUid {
  return PricePointUidSchema.parse(pointUid)
}

export const viaPricePointUid = (etalon: PricePointUid) => (candidate: PricePoint) => isEqual(parsePricePointUid(candidate), etalon)
