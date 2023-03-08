import { getFinder, getInserter, getName } from 'libs/utils/zod'
import { withIdFromName } from '../../generic/models/Name/withIdFromName'
import { Asset, AssetSchema, parseAssetUid } from '../models/Asset'

export const allAssets: Asset[] = []

export const addAsset = getInserter<Asset>(getName(AssetSchema), AssetSchema, parseAssetUid, allAssets)

export const findAsset = getFinder(parseAssetUid, allAssets)

export const getAssetsByMoniker = () => Object.fromEntries(allAssets.map(asset => [`${asset.id} (${asset.ticker}))`, asset]))

export const BTC = addAsset(withIdFromName({
  name: 'Bitcoin',
  ticker: 'BTC',
  // url: 'https://coinmarketcap.com/currencies/bitcoin/',
}))

export const ETH = addAsset(withIdFromName({
  name: 'Ethereum',
  ticker: 'ETH',
  // url: 'https://coinmarketcap.com/currencies/ethereum/',
}))

export const USDT = addAsset(withIdFromName({
  name: 'Tether',
  ticker: 'USDT',
  // url: 'https://coinmarketcap.com/currencies/tether/',
}))

export const USDC = addAsset(withIdFromName({
  name: 'Circle USD',
  ticker: 'USDC',
  // url: 'https://coinmarketcap.com/currencies/tether/',
}))

export const BUSD = addAsset(withIdFromName({
  name: 'Binance USD',
  ticker: 'BUSD',
}))

export const WETH = addAsset(withIdFromName({
  name: 'Wrapped Ether',
  ticker: 'WETH',
  // url: 'https://coinmarketcap.com/currencies/weth/',
}))

export const BNB = addAsset(withIdFromName({
  name: 'Binance Coin',
  ticker: 'BNB',
  // maxSupply: num(166801148),
  // url: 'https://coinmarketcap.com/currencies/binance-coin/',
}))

export const SHLD = addAsset(withIdFromName({
  name: 'Shield Finance Token',
  ticker: 'SHLD',
  // maxSupply: num(969163000),
  // url: 'https://coinmarketcap.com/currencies/shield-finance/',
}))

export const BULL = addAsset(withIdFromName({
  name: 'Bull Token',
  ticker: 'BULL',
  // maxSupply: num(9691630000000),
  // url: 'https://etherscan.io/address/0x1Bb022aB668085C6417B7d7007b0fbD53bACc383',
}))

export const USD = addAsset(withIdFromName({
  name: 'US Dollar',
  ticker: 'USD',
  // url: 'https://en.wikipedia.org/wiki/United_States_dollar',
}))

export const EUR = addAsset(withIdFromName({
  name: 'Euro',
  ticker: 'EUR',
  // url: 'https://en.wikipedia.org/wiki/United_States_dollar',
}))

export const THB = addAsset(withIdFromName({
  name: 'Thai Baht',
  ticker: 'THB',
  // url: 'https://en.wikipedia.org/wiki/Thai_baht',
}))

export const RUB = addAsset(withIdFromName({
  name: 'Russian Ruble',
  ticker: 'RUB',
  // url: 'https://en.wikipedia.org/wiki/Russian_ruble',
}))

export const COLI = addAsset(withIdFromName({
  name: 'Coliquidity Token',
  ticker: 'COLI',
  // url: `https://${ColiquidityCom}`,
}))

export const COLI_WETH_LP = addAsset(withIdFromName({
  name: 'COLI-WETH Uniswap V2 LP tokens',
  ticker: 'UNIV2',
}))

export const COLI_BUSD_LP = addAsset(withIdFromName({
  name: 'COLI-BUSD PancakeSwap LP tokens',
  ticker: 'CakeLP',
}))

export const MFT = addAsset(withIdFromName({
  name: 'Mainframe Token',
  ticker: 'MFT',
}))

export const WPR = addAsset(withIdFromName({
  name: 'WePower',
  ticker: 'WPR',
}))

export const CND = addAsset(withIdFromName({
  name: 'Cindicator',
  ticker: 'CND',
}))

export const CAN = addAsset(withIdFromName({
  name: 'CanYaCoin',
  ticker: 'CAN',
}))

export const DRGN = addAsset(withIdFromName({
  name: 'Dragon',
  ticker: 'DRGN',
}))

export const FUEL = addAsset(withIdFromName({
  name: 'Fuel Token',
  ticker: 'FUEL',
}))

export const WIS = addAsset(withIdFromName({
  name: 'Experty Wisdom Token',
  ticker: 'WIS',
}))

export const AKS = addAsset(withIdFromName({
  name: 'akSwap.io',
  ticker: 'AKS', // not a real symbol
}))

export const SOL = addAsset(withIdFromName({
  name: 'Solana',
  ticker: 'SOL',
}))

export const HEX = addAsset(withIdFromName({
  name: 'Hex',
  ticker: 'HEX',
}))
