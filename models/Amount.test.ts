import { AmountSchema } from './Amount'
import { BigNumber } from 'libs/utils/bignumber'
import { testSamples } from 'libs/utils/jest/testSamples'

testSamples(AmountSchema, [
  new BigNumber('0'),
  new BigNumber('1'),
  new BigNumber('1000000000000000000000000000000000'),
], [
  new BigNumber(''),
  new BigNumber('arst'),
])
