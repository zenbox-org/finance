import { Transfer, validateTransfers } from '../Transfer'
import { getPapaparseDefaultConfig, parseCSV } from 'zenbox-util/papaparse'

export async function parseTransfersFromCSV(contents: string) {
  const result = await parseCSV<Transfer>(contents, getPapaparseDefaultConfig<Transfer>())
  return validateTransfers(result)
}
