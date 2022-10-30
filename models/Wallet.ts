import { z, ZodObject } from 'zod'
import { getDuplicatesRefinement } from 'zenbox-util/zod'
import { ZodRawShape } from 'zod/lib/types'
import { strict as assert } from 'assert'
import { NetworkSchema, NetworkUidSchema } from './Network'
import { NameSchema } from '../../generic/models/Name'

export const WalletSchema = validateWalletSchema(z.object({
  name: NameSchema,
  network: NetworkSchema,
}))

export const WalletsSchema = z.array(WalletSchema)
  .superRefine(getDuplicatesRefinement('Wallet', parseWalletUid))

export const WalletUidSchema = z.object({
  name: WalletSchema.shape.name,
  network: NetworkUidSchema,
})

export type Wallet = z.infer<typeof WalletSchema>

export type WalletUid = z.infer<typeof WalletUidSchema>

export function parseWallet(wallet: Wallet): Wallet {
  return WalletSchema.parse(wallet)
}

export function parseWallets(wallets: Wallet[]): Wallet[] {
  return WalletsSchema.parse(wallets)
}

export function parseWalletUid(walletUid: WalletUid) {
  return WalletUidSchema.parse(walletUid)
}

function validateWalletSchema<T extends ZodRawShape>(schema: ZodObject<T>) {
  assert.equal(schema.shape['asset'], undefined, 'Ethereum addresses are multi-asset wallets')
  return schema
}
