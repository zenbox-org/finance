import { NotesSchema } from 'libs/generic/models/Notes'
import { isEqualByDC } from 'libs/utils/lodash'
import { getArraySchema } from 'libs/utils/zod'
import { z } from 'zod'
import { DurationSchema } from '../../generic/models/Duration'
import { BagSchema } from './Bag'

export const BagDurationSchema = z.object({
  bag: BagSchema,
  duration: DurationSchema,
  notes: NotesSchema,
}).describe('BagPeriod')

export const BagDurationUidSchema = BagDurationSchema.pick({

})

export const BagDurationsSchema = getArraySchema(BagDurationSchema, parseBagDurationUid)

export type BagDuration = z.infer<typeof BagDurationSchema>

export type BagDurationUid = z.infer<typeof BagDurationUidSchema>

export function parseBagDuration(period: BagDuration): BagDuration {
  return BagDurationSchema.parse(period)
}

export function parseBagDurations(periods: BagDuration[]): BagDuration[] {
  return BagDurationsSchema.parse(periods)
}

export function parseBagDurationUid(periodUid: BagDurationUid): BagDurationUid {
  return BagDurationUidSchema.parse(periodUid)
}

export const isEqualBagDuration = isEqualByDC(parseBagDurationUid)
