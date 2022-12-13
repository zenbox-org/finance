import { ContractUid } from '../../../ethereum/models/Contract'
import { Asset } from '../Asset'

export type GetAssetByContractUid = (uid: ContractUid) => Asset
