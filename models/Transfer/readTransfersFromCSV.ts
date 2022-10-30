import { PathLike } from 'fs'
import { readFile } from 'fs/promises'
import { parseTransfersFromCSV } from './parseTransfersFromCSV'

export async function readTransfersFromCSV(path: PathLike) {
  const contents = await readFile(path)
  return parseTransfersFromCSV(contents.toString())
}
