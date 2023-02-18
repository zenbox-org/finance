import { BalanceGenTuple } from '../BalanceGen'

export const getBalanceGenTupleKey = <Wallet, Asset, Amount>([wallet, asset, amount]: BalanceGenTuple<Wallet, Asset, Amount>) => [wallet, asset]
