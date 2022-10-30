import { expect } from 'zenbox-util/chai'
import { test } from '@jest/globals'
import { toAmount } from './toAmount'
import { BigNumber } from 'zenbox-util/bignumber'
import { ETH, USDT } from '../../data/allTassets'
import { hour } from 'zenbox-util/duration'
import { TimeValueMap } from '../../../generic/models/TimeValueMap'

test('toAmount', async function () {
  const timeValueMap: TimeValueMap = {
    USDT: new BigNumber(hour).dividedBy('100'),
    ETH: new BigNumber(hour).dividedBy('100').multipliedBy('4000'),
  }
  expect(toAmount(new BigNumber('100'), USDT, ETH, timeValueMap)).to.be.bignumber.equal(new BigNumber('0.025'))
  expect(toAmount(new BigNumber('2'), ETH, USDT, timeValueMap)).to.be.bignumber.equal(new BigNumber('8000'))
})
