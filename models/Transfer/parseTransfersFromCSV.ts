import { getPapaparseDefaultConfig, parseCSV } from 'libs/utils/papaparse'
import { Transfer, validateTransfers } from '../Transfer'

export async function parseTransfersFromCSV(contents: string) {
  const result = await parseCSV<Transfer>(contents, getPapaparseDefaultConfig<Transfer>())
  return validateTransfers(result)
}
