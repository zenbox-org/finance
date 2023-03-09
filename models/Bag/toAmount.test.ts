import { test } from '@jest/globals'
import { TimeValueMap } from 'libs/generic/models/TimeValueMap'
import { BigNumber } from 'libs/utils/BigNumber/utils'
import { expect } from 'libs/utils/chai'
import { hour } from 'libs/utils/duration'
import { ETH, USDT } from '../../data/allAssets'
import { toAmount } from './toAmount'

test('toAmount', async function () {
  const timeValueMap: TimeValueMap = {
    USDT: new BigNumber(hour).dividedBy('100'),
    ETH: new BigNumber(hour).dividedBy('100').multipliedBy('4000'),
  }
  expect(toAmount(new BigNumber('100'), USDT, ETH, timeValueMap)).to.be.bignumber.equal(new BigNumber('0.025'))
  expect(toAmount(new BigNumber('2'), ETH, USDT, timeValueMap)).to.be.bignumber.equal(new BigNumber('8000'))
})
