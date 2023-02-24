export const getFintGensInitial = <Amount>(amount: Amount) => <Wallet, Asset>(wallets: Wallet[], assets: Asset[]) => {
  return wallets.flatMap(wallet => assets.map(asset => ({
    asset,
    wallet,
    amount,
  })))
}
