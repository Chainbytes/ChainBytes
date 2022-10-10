// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class newFarm extends ethereum.Event {
  get params(): newFarm__Params {
    return new newFarm__Params(this);
  }
}

export class newFarm__Params {
  _event: newFarm;

  constructor(event: newFarm) {
    this._event = event;
  }

  get farmAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class newForeman extends ethereum.Event {
  get params(): newForeman__Params {
    return new newForeman__Params(this);
  }
}

export class newForeman__Params {
  _event: newForeman;

  constructor(event: newForeman) {
    this._event = event;
  }

  get farmAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get foreman(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class workerCheckedIn extends ethereum.Event {
  get params(): workerCheckedIn__Params {
    return new workerCheckedIn__Params(this);
  }
}

export class workerCheckedIn__Params {
  _event: workerCheckedIn;

  constructor(event: workerCheckedIn) {
    this._event = event;
  }

  get foreman(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get worker(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get date(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class workerPaid extends ethereum.Event {
  get params(): workerPaid__Params {
    return new workerPaid__Params(this);
  }
}

export class workerPaid__Params {
  _event: workerPaid;

  constructor(event: workerPaid) {
    this._event = event;
  }

  get farm(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get worker(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get date(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class coffee extends ethereum.SmartContract {
  static bind(address: Address): coffee {
    return new coffee("coffee", address);
  }

  isFarm(param0: Address): boolean {
    let result = super.call("isFarm", "isFarm(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isFarm(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isFarm", "isFarm(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isForeman(param0: Address): boolean {
    let result = super.call("isForeman", "isForeman(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isForeman(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isForeman", "isForeman(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CheckInCall extends ethereum.Call {
  get inputs(): CheckInCall__Inputs {
    return new CheckInCall__Inputs(this);
  }

  get outputs(): CheckInCall__Outputs {
    return new CheckInCall__Outputs(this);
  }
}

export class CheckInCall__Inputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }

  get _workers(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _date(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CheckInCall__Outputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }
}

export class CreateFarmCall extends ethereum.Call {
  get inputs(): CreateFarmCall__Inputs {
    return new CreateFarmCall__Inputs(this);
  }

  get outputs(): CreateFarmCall__Outputs {
    return new CreateFarmCall__Outputs(this);
  }
}

export class CreateFarmCall__Inputs {
  _call: CreateFarmCall;

  constructor(call: CreateFarmCall) {
    this._call = call;
  }

  get _farmAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateFarmCall__Outputs {
  _call: CreateFarmCall;

  constructor(call: CreateFarmCall) {
    this._call = call;
  }
}

export class CreateForemanCall extends ethereum.Call {
  get inputs(): CreateForemanCall__Inputs {
    return new CreateForemanCall__Inputs(this);
  }

  get outputs(): CreateForemanCall__Outputs {
    return new CreateForemanCall__Outputs(this);
  }
}

export class CreateForemanCall__Inputs {
  _call: CreateForemanCall;

  constructor(call: CreateForemanCall) {
    this._call = call;
  }

  get _foremanAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateForemanCall__Outputs {
  _call: CreateForemanCall;

  constructor(call: CreateForemanCall) {
    this._call = call;
  }
}

export class PayWorkersCall extends ethereum.Call {
  get inputs(): PayWorkersCall__Inputs {
    return new PayWorkersCall__Inputs(this);
  }

  get outputs(): PayWorkersCall__Outputs {
    return new PayWorkersCall__Outputs(this);
  }
}

export class PayWorkersCall__Inputs {
  _call: PayWorkersCall;

  constructor(call: PayWorkersCall) {
    this._call = call;
  }

  get _workers(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _date(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class PayWorkersCall__Outputs {
  _call: PayWorkersCall;

  constructor(call: PayWorkersCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}