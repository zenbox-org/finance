import { BigNumber } from 'libs/utils/bignumber'
import { testSamples } from 'libs/utils/jest/testSamples'
import { AmountSchema } from './Amount'

testSamples(AmountSchema, [
  new BigNumber('0'),
  new BigNumber('1'),
  new BigNumber('1000000000000000000000000000000000'),
], [
  new BigNumber(''),
  new BigNumber('arst'),
])
