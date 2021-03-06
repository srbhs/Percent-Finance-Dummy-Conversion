import { OwnershipTransferred as OwnershipTransferredEvent } from "../generated/PermitAndDepositDai/PermitAndDepositDai"
import {
  DepositToCall,
  PermitAndDepositToCall,
  RenounceOwnershipCall,
  TransferOwnershipCall
} from "../generated/PermitAndDepositDai/PermitAndDepositDai"
import { PermitAndDepositDaiOwnershipTransferredEvent } from "../generated/schema"
import {
  PermitAndDepositDaidepositToCall,
  PermitAndDepositDaipermitAndDepositToCall,
  PermitAndDepositDairenounceOwnershipCall,
  PermitAndDepositDaitransferOwnershipCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new PermitAndDepositDaiOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handledepositToCall(call: DepositToCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new PermitAndDepositDaidepositToCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.dai = call.inputs.dai
  entity.prizePool = call.inputs.prizePool
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.referrer = call.inputs.referrer
  entity.save()
}

export function handlepermitAndDepositToCall(
  call: PermitAndDepositToCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new PermitAndDepositDaipermitAndDepositToCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.dai = call.inputs.dai
  entity.holder = call.inputs.holder
  entity.nonce = call.inputs.nonce
  entity.expiry = call.inputs.expiry
  entity.allowed = call.inputs.allowed
  entity.v = call.inputs.v
  entity.r = call.inputs.r
  entity.s = call.inputs.s
  entity.prizePool = call.inputs.prizePool
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.referrer = call.inputs.referrer
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new PermitAndDepositDairenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new PermitAndDepositDaitransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}
