import { purry } from 'remeda'
import { BasicArithmetic, HeteroBasicOperations } from '../../../utils/arithmetic'
import { BalanceGen } from '../BalanceGen'

// ({ add, sub, mul, div, abs, mod, fromNumber }: BasicArithmetic<BalanceGen<Address, Amount>>)
export const getBalanceGenHeteroBasicOperations = <Address, Amount>({ add, sub, mul, div, mod }: BasicArithmetic<Amount>): HeteroBasicOperations<BalanceGen<Address, Amount>, Amount, BalanceGen<Address, Amount>> => ({
  add() {
    return purry((a: BalanceGen<Address, Amount>, b: Amount): BalanceGen<Address, Amount> => ({ address: a.address, amount: add(a.amount, b) }), arguments)
  },
  sub() {
    return purry((a: BalanceGen<Address, Amount>, b: Amount): BalanceGen<Address, Amount> => ({ address: a.address, amount: sub(a.amount, b) }), arguments)
  },
  mul() {
    return purry((a: BalanceGen<Address, Amount>, b: Amount): BalanceGen<Address, Amount> => ({ address: a.address, amount: mul(a.amount, b) }), arguments)
  },
  div() {
    return purry((a: BalanceGen<Address, Amount>, b: Amount): BalanceGen<Address, Amount> => ({ address: a.address, amount: div(a.amount, b) }), arguments)
  },
  mod() {
    return purry((a: BalanceGen<Address, Amount>, b: Amount): BalanceGen<Address, Amount> => ({ address: a.address, amount: mod(a.amount, b) }), arguments)
  },
})
