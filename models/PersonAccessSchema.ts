import { z } from 'zod'
import { AccessTypeSchema } from '../../generic/models/AccessType'
import { PersonSchema } from '../../generic/models/Person'

export const PersonAccessSchema = z.object({
  person: PersonSchema,
  types: z.array(AccessTypeSchema).default([]),
})
