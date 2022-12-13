import { Asset } from '../Asset'
import { ContractUid } from '../../../ethereum/models/Contract'

export type GetAssetByContractUid = (uid: ContractUid) => Asset
