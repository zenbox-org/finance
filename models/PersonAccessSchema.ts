import { z } from 'zod'
import { PersonSchema } from '../../generic/models/Person'
import { AccessTypeSchema } from '../../generic/models/AccessType'

export const PersonAccessSchema = z.object({
  person: PersonSchema,
  types: z.array(AccessTypeSchema).default([]),
})
