import {
  OwnershipTransferred as OwnershipTransferredEvent,
  newFarm as newFarmEvent,
  newForeman as newForemanEvent,
  workerCheckedIn as workerCheckedInEvent,
  workerPaid as workerPaidEvent
} from "../generated/coffee-chain-bytes/coffee-chain-bytes"
import {
  OwnershipTransferred,
  newFarm,
  newForeman,
  workerCheckedIn,
  workerPaid
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewFarm(event: newFarmEvent): void {
  let entity = new newFarm(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.farmAddress = event.params.farmAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewForeman(event: newForemanEvent): void {
  let entity = new newForeman(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.farmAddress = event.params.farmAddress
  entity.foreman = event.params.foreman

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleworkerCheckedIn(event: workerCheckedInEvent): void {
  let entity = new workerCheckedIn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.foreman = event.params.foreman
  entity.worker = event.params.worker
  entity.date = event.params.date

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleworkerPaid(event: workerPaidEvent): void {
  let entity = new workerPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.farm = event.params.farm
  entity.worker = event.params.worker
  entity.amount = event.params.amount
  entity.date = event.params.date

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
