import {
  AwardCaptured as AwardCapturedEvent,
  Awarded as AwardedEvent,
  AwardedExternalERC20 as AwardedExternalERC20Event,
  AwardedExternalERC721 as AwardedExternalERC721Event,
  CompoundPrizePoolInitialized as CompoundPrizePoolInitializedEvent,
  ControlledTokenAdded as ControlledTokenAddedEvent,
  CreditBurned as CreditBurnedEvent,
  CreditMinted as CreditMintedEvent,
  CreditPlanSet as CreditPlanSetEvent,
  Deposited as DepositedEvent,
  Initialized as InitializedEvent,
  InstantWithdrawal as InstantWithdrawalEvent,
  LiquidityCapSet as LiquidityCapSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PrizeStrategySet as PrizeStrategySetEvent,
  ReserveFeeCaptured as ReserveFeeCapturedEvent,
  ReserveWithdrawal as ReserveWithdrawalEvent,
  TimelockDeposited as TimelockDepositedEvent,
  TimelockedWithdrawal as TimelockedWithdrawalEvent,
  TimelockedWithdrawalSwept as TimelockedWithdrawalSweptEvent,
  TransferredExternalERC20 as TransferredExternalERC20Event
} from "../generated/CompoundPrizePool/CompoundPrizePool"
import {
  AddControlledTokenCall,
  AwardCall,
  AwardExternalERC20Call,
  AwardExternalERC721Call,
  BalanceCall,
  BalanceOfCreditCall,
  BeforeTokenTransferCall,
  CalculateEarlyExitFeeCall,
  CalculateTimelockDurationCall,
  CaptureAwardBalanceCall,
  DepositToCall,
  InitializeCall,
  Initialize1Call,
  RenounceOwnershipCall,
  SetCreditPlanOfCall,
  SetLiquidityCapCall,
  SetPrizeStrategyCall,
  SweepTimelockBalancesCall,
  TimelockDepositToCall,
  TransferExternalERC20Call,
  TransferOwnershipCall,
  WithdrawInstantlyFromCall,
  WithdrawReserveCall,
  WithdrawWithTimelockFromCall
} from "../generated/CompoundPrizePool/CompoundPrizePool"
import {
  CompoundPrizePoolAwardCapturedEvent,
  CompoundPrizePoolAwardedEvent,
  CompoundPrizePoolAwardedExternalERC20Event,
  CompoundPrizePoolAwardedExternalERC721Event,
  CompoundPrizePoolCompoundPrizePoolInitializedEvent,
  CompoundPrizePoolControlledTokenAddedEvent,
  CompoundPrizePoolCreditBurnedEvent,
  CompoundPrizePoolCreditMintedEvent,
  CompoundPrizePoolCreditPlanSetEvent,
  CompoundPrizePoolDepositedEvent,
  CompoundPrizePoolInitializedEvent,
  CompoundPrizePoolInstantWithdrawalEvent,
  CompoundPrizePoolLiquidityCapSetEvent,
  CompoundPrizePoolOwnershipTransferredEvent,
  CompoundPrizePoolPrizeStrategySetEvent,
  CompoundPrizePoolReserveFeeCapturedEvent,
  CompoundPrizePoolReserveWithdrawalEvent,
  CompoundPrizePoolTimelockDepositedEvent,
  CompoundPrizePoolTimelockedWithdrawalEvent,
  CompoundPrizePoolTimelockedWithdrawalSweptEvent,
  CompoundPrizePoolTransferredExternalERC20Event
} from "../generated/schema"
import {
  CompoundPrizePooladdControlledTokenCall,
  CompoundPrizePoolawardCall,
  CompoundPrizePoolawardExternalERC20Call,
  CompoundPrizePoolawardExternalERC721Call,
  CompoundPrizePoolbalanceCall,
  CompoundPrizePoolbalanceOfCreditCall,
  CompoundPrizePoolbeforeTokenTransferCall,
  CompoundPrizePoolcalculateEarlyExitFeeCall,
  CompoundPrizePoolcalculateTimelockDurationCall,
  CompoundPrizePoolcaptureAwardBalanceCall,
  CompoundPrizePooldepositToCall,
  CompoundPrizePoolinitializeCall,
  CompoundPrizePoolinitialize1Call,
  CompoundPrizePoolrenounceOwnershipCall,
  CompoundPrizePoolsetCreditPlanOfCall,
  CompoundPrizePoolsetLiquidityCapCall,
  CompoundPrizePoolsetPrizeStrategyCall,
  CompoundPrizePoolsweepTimelockBalancesCall,
  CompoundPrizePooltimelockDepositToCall,
  CompoundPrizePooltransferExternalERC20Call,
  CompoundPrizePooltransferOwnershipCall,
  CompoundPrizePoolwithdrawInstantlyFromCall,
  CompoundPrizePoolwithdrawReserveCall,
  CompoundPrizePoolwithdrawWithTimelockFromCall
} from "../generated/schema"

export function handleAwardCapturedEvent(event: AwardCapturedEvent): void {
  let entity = new CompoundPrizePoolAwardCapturedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.amount = event.params.amount
  entity.save()
}

export function handleAwardedEvent(event: AwardedEvent): void {
  let entity = new CompoundPrizePoolAwardedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.winner = event.params.winner
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleAwardedExternalERC20Event(
  event: AwardedExternalERC20Event
): void {
  let entity = new CompoundPrizePoolAwardedExternalERC20Event(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.winner = event.params.winner
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleAwardedExternalERC721Event(
  event: AwardedExternalERC721Event
): void {
  let entity = new CompoundPrizePoolAwardedExternalERC721Event(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.winner = event.params.winner
  entity.token = event.params.token
  entity.tokenIds = event.params.tokenIds
  entity.save()
}

export function handleCompoundPrizePoolInitializedEvent(
  event: CompoundPrizePoolInitializedEvent
): void {
  let entity = new CompoundPrizePoolCompoundPrizePoolInitializedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.cToken = event.params.cToken
  entity.save()
}

export function handleControlledTokenAddedEvent(
  event: ControlledTokenAddedEvent
): void {
  let entity = new CompoundPrizePoolControlledTokenAddedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.save()
}

export function handleCreditBurnedEvent(event: CreditBurnedEvent): void {
  let entity = new CompoundPrizePoolCreditBurnedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleCreditMintedEvent(event: CreditMintedEvent): void {
  let entity = new CompoundPrizePoolCreditMintedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleCreditPlanSetEvent(event: CreditPlanSetEvent): void {
  let entity = new CompoundPrizePoolCreditPlanSetEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.creditLimitMantissa = event.params.creditLimitMantissa
  entity.creditRateMantissa = event.params.creditRateMantissa
  entity.save()
}

export function handleDepositedEvent(event: DepositedEvent): void {
  let entity = new CompoundPrizePoolDepositedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.to = event.params.to
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.referrer = event.params.referrer
  entity.save()
}

export function handleInitializedEvent(event: InitializedEvent): void {
  let entity = new CompoundPrizePoolInitializedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.trustedForwarder = event.params.trustedForwarder
  entity.reserveRegistry = event.params.reserveRegistry
  entity.maxExitFeeMantissa = event.params.maxExitFeeMantissa
  entity.maxTimelockDuration = event.params.maxTimelockDuration
  entity.save()
}

export function handleInstantWithdrawalEvent(
  event: InstantWithdrawalEvent
): void {
  let entity = new CompoundPrizePoolInstantWithdrawalEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.redeemed = event.params.redeemed
  entity.exitFee = event.params.exitFee
  entity.save()
}

export function handleLiquidityCapSetEvent(event: LiquidityCapSetEvent): void {
  let entity = new CompoundPrizePoolLiquidityCapSetEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.liquidityCap = event.params.liquidityCap
  entity.save()
}

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new CompoundPrizePoolOwnershipTransferredEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePrizeStrategySetEvent(
  event: PrizeStrategySetEvent
): void {
  let entity = new CompoundPrizePoolPrizeStrategySetEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.prizeStrategy = event.params.prizeStrategy
  entity.save()
}

export function handleReserveFeeCapturedEvent(
  event: ReserveFeeCapturedEvent
): void {
  let entity = new CompoundPrizePoolReserveFeeCapturedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.amount = event.params.amount
  entity.save()
}

export function handleReserveWithdrawalEvent(
  event: ReserveWithdrawalEvent
): void {
  let entity = new CompoundPrizePoolReserveWithdrawalEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleTimelockDepositedEvent(
  event: TimelockDepositedEvent
): void {
  let entity = new CompoundPrizePoolTimelockDepositedEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.to = event.params.to
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleTimelockedWithdrawalEvent(
  event: TimelockedWithdrawalEvent
): void {
  let entity = new CompoundPrizePoolTimelockedWithdrawalEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.unlockTimestamp = event.params.unlockTimestamp
  entity.save()
}

export function handleTimelockedWithdrawalSweptEvent(
  event: TimelockedWithdrawalSweptEvent
): void {
  let entity = new CompoundPrizePoolTimelockedWithdrawalSweptEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.redeemed = event.params.redeemed
  entity.save()
}

export function handleTransferredExternalERC20Event(
  event: TransferredExternalERC20Event
): void {
  let entity = new CompoundPrizePoolTransferredExternalERC20Event(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.to = event.params.to
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleaddControlledTokenCall(
  call: AddControlledTokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePooladdControlledTokenCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleawardCall(call: AwardCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolawardCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.save()
}

export function handleawardExternalERC20Call(
  call: AwardExternalERC20Call
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolawardExternalERC20Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.externalToken = call.inputs.externalToken
  entity.amount = call.inputs.amount
  entity.save()
}

export function handleawardExternalERC721Call(
  call: AwardExternalERC721Call
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolawardExternalERC721Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.externalToken = call.inputs.externalToken
  entity.tokenIds = call.inputs.tokenIds
  entity.save()
}

export function handlebalanceCall(call: BalanceCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolbalanceCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlebalanceOfCreditCall(call: BalanceOfCreditCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolbalanceOfCreditCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.controlledToken = call.inputs.controlledToken
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlebeforeTokenTransferCall(
  call: BeforeTokenTransferCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolbeforeTokenTransferCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.save()
}

export function handlecalculateEarlyExitFeeCall(
  call: CalculateEarlyExitFeeCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolcalculateEarlyExitFeeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.controlledToken = call.inputs.controlledToken
  entity.amount = call.inputs.amount
  entity.exitFee = call.outputs.exitFee
  entity.burnedCredit = call.outputs.burnedCredit
  entity.save()
}

export function handlecalculateTimelockDurationCall(
  call: CalculateTimelockDurationCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolcalculateTimelockDurationCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.controlledToken = call.inputs.controlledToken
  entity.amount = call.inputs.amount
  entity.durationSeconds = call.outputs.durationSeconds
  entity.burnedCredit = call.outputs.burnedCredit
  entity.save()
}

export function handlecaptureAwardBalanceCall(
  call: CaptureAwardBalanceCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolcaptureAwardBalanceCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handledepositToCall(call: DepositToCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePooldepositToCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.referrer = call.inputs.referrer
  entity.save()
}

export function handleinitializeCall(call: InitializeCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolinitializeCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleinitialize1Call(call: Initialize1Call): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolinitialize1Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolrenounceOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetCreditPlanOfCall(call: SetCreditPlanOfCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolsetCreditPlanOfCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetLiquidityCapCall(call: SetLiquidityCapCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolsetLiquidityCapCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetPrizeStrategyCall(call: SetPrizeStrategyCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolsetPrizeStrategyCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesweepTimelockBalancesCall(
  call: SweepTimelockBalancesCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolsweepTimelockBalancesCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.users = call.inputs.users
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handletimelockDepositToCall(call: TimelockDepositToCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePooltimelockDepositToCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.save()
}

export function handletransferExternalERC20Call(
  call: TransferExternalERC20Call
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePooltransferExternalERC20Call(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.externalToken = call.inputs.externalToken
  entity.amount = call.inputs.amount
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePooltransferOwnershipCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawInstantlyFromCall(
  call: WithdrawInstantlyFromCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolwithdrawInstantlyFromCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.maximumExitFee = call.inputs.maximumExitFee
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlewithdrawReserveCall(call: WithdrawReserveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolwithdrawReserveCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlewithdrawWithTimelockFromCall(
  call: WithdrawWithTimelockFromCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new CompoundPrizePoolwithdrawWithTimelockFromCall(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.amount = call.inputs.amount
  entity.controlledToken = call.inputs.controlledToken
  entity.value0 = call.outputs.value0
  entity.save()
}
