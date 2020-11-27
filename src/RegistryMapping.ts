import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Registered as RegisteredEvent
} from "../generated/Registry/Registry"
import {
  RegisterCall,
  RenounceOwnershipCall,
  TransferOwnershipCall
} from "../generated/Registry/Registry"
import {
  RegistryOwnershipTransferredEvent,
  RegistryRegisteredEvent
} from "../generated/schema"
import {
  RegistryregisterCall,
  RegistryrenounceOwnershipCall,
  RegistrytransferOwnershipCall
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new RegistryOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRegisteredEvent(event: RegisteredEvent): void {
  let entity = new RegistryRegisteredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.pointer = event.params.pointer
  entity.save()
}

export function handleregisterCall(call: RegisterCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistryregisterCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistryrenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistrytransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}
