import {
  BalanceDripActivated as BalanceDripActivatedEvent,
  BalanceDripDeactivated as BalanceDripDeactivatedEvent,
  BalanceDripDripped as BalanceDripDrippedEvent,
  BalanceDripRateSet as BalanceDripRateSetEvent,
  DripTokenClaimed as DripTokenClaimedEvent,
  DripTokenDripped as DripTokenDrippedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferredOut as TransferredOutEvent,
  VolumeDripActivated as VolumeDripActivatedEvent,
  VolumeDripDeactivated as VolumeDripDeactivatedEvent,
  VolumeDripDripped as VolumeDripDrippedEvent,
  VolumeDripPeriodEnded as VolumeDripPeriodEndedEvent,
  VolumeDripPeriodStarted as VolumeDripPeriodStartedEvent,
  VolumeDripSet as VolumeDripSetEvent
} from "../generated/Comptroller/Comptroller"
import {
  ActivateBalanceDripCall,
  ActivateVolumeDripCall,
  BeforeTokenMintCall,
  BeforeTokenTransferCall,
  CaptureClaimsForBalanceDripsForPairsCall,
  ClaimDripCall,
  ClaimDripsCall,
  DeactivateBalanceDripCall,
  DeactivateVolumeDripCall,
  MintAndCaptureVolumeDripsForPairsCall,
  RenounceOwnershipCall,
  SetBalanceDripRateCall,
  SetVolumeDripCall,
  TransferOutCall,
  TransferOwnershipCall,
  UpdateActiveBalanceDripsForPairsCall,
  UpdateActiveVolumeDripsForPairsCall,
  UpdateAndClaimDripsCall,
  UpdateDripsCall
} from "../generated/Comptroller/Comptroller"
import {
  ComptrollerBalanceDripActivatedEvent,
  ComptrollerBalanceDripDeactivatedEvent,
  ComptrollerBalanceDripDrippedEvent,
  ComptrollerBalanceDripRateSetEvent,
  ComptrollerDripTokenClaimedEvent,
  ComptrollerDripTokenDrippedEvent,
  ComptrollerOwnershipTransferredEvent,
  ComptrollerTransferredOutEvent,
  ComptrollerVolumeDripActivatedEvent,
  ComptrollerVolumeDripDeactivatedEvent,
  ComptrollerVolumeDripDrippedEvent,
  ComptrollerVolumeDripPeriodEndedEvent,
  ComptrollerVolumeDripPeriodStartedEvent,
  ComptrollerVolumeDripSetEvent
} from "../generated/schema"
import {
  ComptrolleractivateBalanceDripCall,
  ComptrolleractivateVolumeDripCall,
  ComptrollerbeforeTokenMintCall,
  ComptrollerbeforeTokenTransferCall,
  ComptrollercaptureClaimsForBalanceDripsForPairsCall,
  ComptrollerclaimDripCall,
  ComptrollerclaimDripsCall,
  ComptrollerdeactivateBalanceDripCall,
  ComptrollerdeactivateVolumeDripCall,
  ComptrollermintAndCaptureVolumeDripsForPairsCall,
  ComptrollerrenounceOwnershipCall,
  ComptrollersetBalanceDripRateCall,
  ComptrollersetVolumeDripCall,
  ComptrollertransferOutCall,
  ComptrollertransferOwnershipCall,
  ComptrollerupdateActiveBalanceDripsForPairsCall,
  ComptrollerupdateActiveVolumeDripsForPairsCall,
  ComptrollerupdateAndClaimDripsCall,
  ComptrollerupdateDripsCall
} from "../generated/schema"

export function handleBalanceDripActivatedEvent(
  event: BalanceDripActivatedEvent
): void {
  let entity = new ComptrollerBalanceDripActivatedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.dripRatePerSecond = event.params.dripRatePerSecond
  entity.save()
}

export function handleBalanceDripDeactivatedEvent(
  event: BalanceDripDeactivatedEvent
): void {
  let entity = new ComptrollerBalanceDripDeactivatedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.save()
}

export function handleBalanceDripDrippedEvent(
  event: BalanceDripDrippedEvent
): void {
  let entity = new ComptrollerBalanceDripDrippedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleBalanceDripRateSetEvent(
  event: BalanceDripRateSetEvent
): void {
  let entity = new ComptrollerBalanceDripRateSetEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.dripRatePerSecond = event.params.dripRatePerSecond
  entity.save()
}

export function handleDripTokenClaimedEvent(
  event: DripTokenClaimedEvent
): void {
  let entity = new ComptrollerDripTokenClaimedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleDripTokenDrippedEvent(
  event: DripTokenDrippedEvent
): void {
  let entity = new ComptrollerDripTokenDrippedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new ComptrollerOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransferredOutEvent(event: TransferredOutEvent): void {
  let entity = new ComptrollerTransferredOutEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleVolumeDripActivatedEvent(
  event: VolumeDripActivatedEvent
): void {
  let entity = new ComptrollerVolumeDripActivatedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.periodSeconds = event.params.periodSeconds
  entity.dripAmount = event.params.dripAmount
  entity.save()
}

export function handleVolumeDripDeactivatedEvent(
  event: VolumeDripDeactivatedEvent
): void {
  let entity = new ComptrollerVolumeDripDeactivatedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.save()
}

export function handleVolumeDripDrippedEvent(
  event: VolumeDripDrippedEvent
): void {
  let entity = new ComptrollerVolumeDripDrippedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleVolumeDripPeriodEndedEvent(
  event: VolumeDripPeriodEndedEvent
): void {
  let entity = new ComptrollerVolumeDripPeriodEndedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.period = event.params.period
  entity.totalSupply = event.params.totalSupply
  entity.drippedTokens = event.params.drippedTokens
  entity.save()
}

export function handleVolumeDripPeriodStartedEvent(
  event: VolumeDripPeriodStartedEvent
): void {
  let entity = new ComptrollerVolumeDripPeriodStartedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.period = event.params.period
  entity.dripAmount = event.params.dripAmount
  entity.endTime = event.params.endTime
  entity.save()
}

export function handleVolumeDripSetEvent(event: VolumeDripSetEvent): void {
  let entity = new ComptrollerVolumeDripSetEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.periodSeconds = event.params.periodSeconds
  entity.dripAmount = event.params.dripAmount
  entity.save()
}

export function handleactivateBalanceDripCall(
  call: ActivateBalanceDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrolleractivateBalanceDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.dripRatePerSecond = call.inputs.dripRatePerSecond
  entity.save()
}

export function handleactivateVolumeDripCall(
  call: ActivateVolumeDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrolleractivateVolumeDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.periodSeconds = call.inputs.periodSeconds
  entity.dripAmount = call.inputs.dripAmount
  entity.endTime = call.inputs.endTime
  entity.save()
}

export function handlebeforeTokenMintCall(call: BeforeTokenMintCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerbeforeTokenMintCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.measure = call.inputs.measure
  entity.referrer = call.inputs.referrer
  entity.save()
}

export function handlebeforeTokenTransferCall(
  call: BeforeTokenTransferCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerbeforeTokenTransferCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.to = call.inputs.to
  entity.value2 = call.inputs.value2
  entity.measure = call.inputs.measure
  entity.save()
}

export function handlecaptureClaimsForBalanceDripsForPairsCall(
  call: CaptureClaimsForBalanceDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollercaptureClaimsForBalanceDripsForPairsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handleclaimDripCall(call: ClaimDripCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerclaimDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripToken = call.inputs.dripToken
  entity.amount = call.inputs.amount
  entity.save()
}

export function handleclaimDripsCall(call: ClaimDripsCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerclaimDripsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handledeactivateBalanceDripCall(
  call: DeactivateBalanceDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerdeactivateBalanceDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.prevDripToken = call.inputs.prevDripToken
  entity.save()
}

export function handledeactivateVolumeDripCall(
  call: DeactivateVolumeDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerdeactivateVolumeDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.prevDripToken = call.inputs.prevDripToken
  entity.save()
}

export function handlemintAndCaptureVolumeDripsForPairsCall(
  call: MintAndCaptureVolumeDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollermintAndCaptureVolumeDripsForPairsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.user = call.inputs.user
  entity.amount = call.inputs.amount
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerrenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetBalanceDripRateCall(
  call: SetBalanceDripRateCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollersetBalanceDripRateCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.dripRatePerSecond = call.inputs.dripRatePerSecond
  entity.save()
}

export function handlesetVolumeDripCall(call: SetVolumeDripCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollersetVolumeDripCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.periodSeconds = call.inputs.periodSeconds
  entity.dripAmount = call.inputs.dripAmount
  entity.save()
}

export function handletransferOutCall(call: TransferOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollertransferOutCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.token = call.inputs.token
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollertransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateActiveBalanceDripsForPairsCall(
  call: UpdateActiveBalanceDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateActiveBalanceDripsForPairsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.save()
}

export function handleupdateActiveVolumeDripsForPairsCall(
  call: UpdateActiveVolumeDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateActiveVolumeDripsForPairsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.save()
}

export function handleupdateAndClaimDripsCall(
  call: UpdateAndClaimDripsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateAndClaimDripsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handleupdateDripsCall(call: UpdateDripsCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateDripsCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.pairs = call.inputs.pairs
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.value0 = call.outputs.value0
  entity.save()
}
