import { parseTassetUid, Tasset, TassetSchema } from '../models/Tasset'
import { getFinder, getInserter, getName } from 'zenbox-util/zod'
import { withIdFromName } from '../../generic/models/Name/withIdFromName'

export const allTassets: Tasset[] = []

export const addTasset = getInserter<Tasset>(getName(TassetSchema), TassetSchema, parseTassetUid, allTassets)

export const findTasset = getFinder(parseTassetUid, allTassets)

export const getTassetsByMoniker = () => Object.fromEntries(allTassets.map(tasset => [`${tasset.id} (${tasset.ticker}))`, tasset]))

export const BTC = addTasset(withIdFromName({
  name: 'Bitcoin',
  ticker: 'BTC',
  // url: 'https://coinmarketcap.com/currencies/bitcoin/',
}))

export const ETH = addTasset(withIdFromName({
  name: 'Ethereum',
  ticker: 'ETH',
  // url: 'https://coinmarketcap.com/currencies/ethereum/',
}))

export const USDT = addTasset(withIdFromName({
  name: 'Tether',
  ticker: 'USDT',
  // url: 'https://coinmarketcap.com/currencies/tether/',
}))

export const USDC = addTasset(withIdFromName({
  name: 'Circle USD',
  ticker: 'USDC',
  // url: 'https://coinmarketcap.com/currencies/tether/',
}))

export const BUSD = addTasset(withIdFromName({
  name: 'Binance USD',
  ticker: 'BUSD',
}))

export const WETH = addTasset(withIdFromName({
  name: 'Wrapped Ether',
  ticker: 'WETH',
  // url: 'https://coinmarketcap.com/currencies/weth/',
}))

export const BNB = addTasset(withIdFromName({
  name: 'Binance Coin',
  ticker: 'BNB',
  // maxSupply: num(166801148),
  // url: 'https://coinmarketcap.com/currencies/binance-coin/',
}))

export const SHLD = addTasset(withIdFromName({
  name: 'Shield Finance Token',
  ticker: 'SHLD',
  // maxSupply: num(969163000),
  // url: 'https://coinmarketcap.com/currencies/shield-finance/',
}))

export const BULL = addTasset(withIdFromName({
  name: 'Bull Token',
  ticker: 'BULL',
  // maxSupply: num(9691630000000),
  // url: 'https://etherscan.io/address/0x1Bb022aB668085C6417B7d7007b0fbD53bACc383',
}))

export const USD = addTasset(withIdFromName({
  name: 'US Dollar',
  ticker: 'USD',
  // url: 'https://en.wikipedia.org/wiki/United_States_dollar',
}))

export const THB = addTasset(withIdFromName({
  name: 'Thai Baht',
  ticker: 'THB',
  // url: 'https://en.wikipedia.org/wiki/Thai_baht',
}))

export const RUB = addTasset(withIdFromName({
  name: 'Russian Ruble',
  ticker: 'RUB',
  // url: 'https://en.wikipedia.org/wiki/Russian_ruble',
}))

export const COLI = addTasset(withIdFromName({
  name: 'Coliquidity Token',
  ticker: 'COLI',
  // url: `https://${ColiquidityCom}`,
}))

export const COLI_WETH_LP = addTasset(withIdFromName({
  name: 'COLI-WETH Uniswap V2 LP tokens',
  ticker: 'UNIV2',
}))

export const COLI_BUSD_LP = addTasset(withIdFromName({
  name: 'COLI-BUSD PancakeSwap LP tokens',
  ticker: 'CakeLP',
}))

export const MFT = addTasset(withIdFromName({
  name: 'Mainframe Token',
  ticker: 'MFT',
}))

export const WPR = addTasset(withIdFromName({
  name: 'WePower',
  ticker: 'WPR',
}))

export const CND = addTasset(withIdFromName({
  name: 'Cindicator',
  ticker: 'CND',
}))

export const CAN = addTasset(withIdFromName({
  name: 'CanYaCoin',
  ticker: 'CAN',
}))

export const DRGN = addTasset(withIdFromName({
  name: 'Dragon',
  ticker: 'DRGN',
}))

export const FUEL = addTasset(withIdFromName({
  name: 'Fuel Token',
  ticker: 'FUEL',
}))

export const WIS = addTasset(withIdFromName({
  name: 'Experty Wisdom Token',
  ticker: 'WIS',
}))

export const AKS = addTasset(withIdFromName({
  name: 'akSwap.io',
  ticker: 'AKS', // not a real symbol
}))

export const SOL = addTasset(withIdFromName({
  name: 'Solana',
  ticker: 'SOL',
}))
