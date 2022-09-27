// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Worker extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Worker entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Worker must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Worker", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Worker | null {
    return changetype<Worker | null>(store.get("Worker", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get daysWorked(): i32 {
    let value = this.get("daysWorked");
    return value!.toI32();
  }

  set daysWorked(value: i32) {
    this.set("daysWorked", Value.fromI32(value));
  }

  get daysUnpaid(): i32 {
    let value = this.get("daysUnpaid");
    return value!.toI32();
  }

  set daysUnpaid(value: i32) {
    this.set("daysUnpaid", Value.fromI32(value));
  }

  get payments(): Array<Bytes> | null {
    let value = this.get("payments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set payments(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("payments");
    } else {
      this.set("payments", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get hasForeman(): Array<Bytes> | null {
    let value = this.get("hasForeman");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set hasForeman(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("hasForeman");
    } else {
      this.set("hasForeman", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get checkIns(): Array<Bytes> | null {
    let value = this.get("checkIns");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set checkIns(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("checkIns");
    } else {
      this.set("checkIns", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }
}

export class Farm extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Farm entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Farm must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Farm", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Farm | null {
    return changetype<Farm | null>(store.get("Farm", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get farmCheckIns(): Array<Bytes> | null {
    let value = this.get("farmCheckIns");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set farmCheckIns(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("farmCheckIns");
    } else {
      this.set("farmCheckIns", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get hasForemen(): Array<Bytes> | null {
    let value = this.get("hasForemen");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set hasForemen(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("hasForemen");
    } else {
      this.set("hasForemen", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get madePayments(): Array<Bytes> | null {
    let value = this.get("madePayments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set madePayments(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("madePayments");
    } else {
      this.set("madePayments", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }
}

export class Foreman extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Foreman entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Foreman must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Foreman", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Foreman | null {
    return changetype<Foreman | null>(store.get("Foreman", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get hasFarm(): Bytes {
    let value = this.get("hasFarm");
    return value!.toBytes();
  }

  set hasFarm(value: Bytes) {
    this.set("hasFarm", Value.fromBytes(value));
  }

  get madeCheckIns(): Array<Bytes> | null {
    let value = this.get("madeCheckIns");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set madeCheckIns(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("madeCheckIns");
    } else {
      this.set("madeCheckIns", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get hasWorkers(): Array<Bytes> | null {
    let value = this.get("hasWorkers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set hasWorkers(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("hasWorkers");
    } else {
      this.set("hasWorkers", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }
}

export class Payment extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Payment must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Payment", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Payment | null {
    return changetype<Payment | null>(store.get("Payment", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get year(): i32 {
    let value = this.get("year");
    return value!.toI32();
  }

  set year(value: i32) {
    this.set("year", Value.fromI32(value));
  }

  get month(): i32 {
    let value = this.get("month");
    return value!.toI32();
  }

  set month(value: i32) {
    this.set("month", Value.fromI32(value));
  }

  get day(): i32 {
    let value = this.get("day");
    return value!.toI32();
  }

  set day(value: i32) {
    this.set("day", Value.fromI32(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get daysPaidFor(): i32 {
    let value = this.get("daysPaidFor");
    return value!.toI32();
  }

  set daysPaidFor(value: i32) {
    this.set("daysPaidFor", Value.fromI32(value));
  }

  get farmWhoPaid(): Bytes {
    let value = this.get("farmWhoPaid");
    return value!.toBytes();
  }

  set farmWhoPaid(value: Bytes) {
    this.set("farmWhoPaid", Value.fromBytes(value));
  }

  get workerPaid(): Bytes {
    let value = this.get("workerPaid");
    return value!.toBytes();
  }

  set workerPaid(value: Bytes) {
    this.set("workerPaid", Value.fromBytes(value));
  }
}

export class CheckIn extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CheckIn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type CheckIn must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CheckIn", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): CheckIn | null {
    return changetype<CheckIn | null>(store.get("CheckIn", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get year(): i32 {
    let value = this.get("year");
    return value!.toI32();
  }

  set year(value: i32) {
    this.set("year", Value.fromI32(value));
  }

  get month(): i32 {
    let value = this.get("month");
    return value!.toI32();
  }

  set month(value: i32) {
    this.set("month", Value.fromI32(value));
  }

  get day(): i32 {
    let value = this.get("day");
    return value!.toI32();
  }

  set day(value: i32) {
    this.set("day", Value.fromI32(value));
  }

  get farmCheckedInAt(): Bytes {
    let value = this.get("farmCheckedInAt");
    return value!.toBytes();
  }

  set farmCheckedInAt(value: Bytes) {
    this.set("farmCheckedInAt", Value.fromBytes(value));
  }

  get foremanWhoChecked(): Bytes {
    let value = this.get("foremanWhoChecked");
    return value!.toBytes();
  }

  set foremanWhoChecked(value: Bytes) {
    this.set("foremanWhoChecked", Value.fromBytes(value));
  }

  get workerCheckedIn(): Bytes {
    let value = this.get("workerCheckedIn");
    return value!.toBytes();
  }

  set workerCheckedIn(value: Bytes) {
    this.set("workerCheckedIn", Value.fromBytes(value));
  }
}
