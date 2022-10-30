import { Tasset } from '../Tasset'
import { ContractUid } from '../../../ethereum/models/Contract'

export type GetAssetByContractUid = (uid: ContractUid) => Tasset
