import { ReckGenTuple } from '../ReckGen'

export const getReckGenTupleKey = <Wallet, Asset, Amount>([wallet, asset, amount]: ReckGenTuple<Wallet, Asset, Amount>) => [wallet, asset]
