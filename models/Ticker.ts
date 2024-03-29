import { ensure } from 'libs/utils/ensure'
import { z } from 'zod'

export const TickerRegex = /^[a-zA-Z0-9-]+$/

/**
 * Don't rename to Symbol - it's a native class in JavaScript
 */
export const TickerSchema = z.string().min(1).regex(TickerRegex, 'Must match a CoinMarketCap ticker (examples: BTC, ETH, 1INCH)')

export type Ticker = z.infer<typeof TickerSchema>

export interface WithTicker { ticker: Ticker }

export function getByTicker<Obj extends WithTicker>(objects: Obj[], ticker: Ticker) {
  return ensure(objects.find(o => o.ticker === ticker))
}
