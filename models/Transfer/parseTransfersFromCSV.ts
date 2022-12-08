import { Transfer, validateTransfers } from '../Transfer'
import { getPapaparseDefaultConfig, parseCSV } from 'libs/utils/papaparse'

export async function parseTransfersFromCSV(contents: string) {
  const result = await parseCSV<Transfer>(contents, getPapaparseDefaultConfig<Transfer>())
  return validateTransfers(result)
}
