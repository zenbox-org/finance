import { FintGenTuple } from '../FintGen'

export const getFintGenTupleKey = <Wallet, Asset, Amount>([wallet, asset, amount]: FintGenTuple<Wallet, Asset, Amount>) => [wallet, asset]
