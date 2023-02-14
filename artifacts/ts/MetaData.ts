/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  web3,
  Address,
  Contract,
  ContractState,
  node,
  binToHex,
  TestContractResult,
  Asset,
  HexString,
  ContractFactory,
  contractIdFromAddress,
  ONE_ALPH,
  groupOfAddress,
  fromApiVals,
  subscribeToEvents,
  SubscribeOptions,
  Subscription,
  EventSubscription,
  randomTxId,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeEventsFromContract,
  subscribeContractCreatedEvent,
  subscribeContractDestroyedEvent,
  subscribeContractEvent,
  subscribeAllEvents,
  testMethod,
  fetchContractState,
  decodeContractCreatedEvent,
  decodeContractDestroyedEvent,
  ContractCreatedEvent,
  ContractDestroyedEvent,
} from "@alephium/web3";
import { default as MetaDataContractJson } from "../test/metadata.ral.json";

export namespace MetaDataTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<MetaDataInstance, {}> {
  at(address: string): MetaDataInstance {
    return new MetaDataInstance(address);
  }

  async testFooMethod(
    params?: Omit<
      TestContractParams<never, never>,
      "testArgs" | "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "foo", params === undefined ? {} : params);
  }

  async testBarMethod(
    params?: Omit<
      TestContractParams<never, never>,
      "testArgs" | "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "bar", params === undefined ? {} : params);
  }

  async testBazMethod(
    params?: Omit<
      TestContractParams<never, never>,
      "testArgs" | "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "baz", params === undefined ? {} : params);
  }
}

export const MetaData = new Factory(
  Contract.fromJson(
    MetaDataContractJson,
    "",
    "cade0de390b8e15960b263ac35aa013cb84f844bce6e3e53e6bfe2cc9166623f"
  )
);

export class MetaDataInstance {
  readonly address: Address;
  readonly contractId: string;
  readonly groupIndex: number;

  constructor(address: Address) {
    this.address = address;
    this.contractId = binToHex(contractIdFromAddress(address));
    this.groupIndex = groupOfAddress(address);
  }

  async fetchState(): Promise<MetaDataTypes.State> {
    return fetchContractState(MetaData, this);
  }

  subscribeContractCreatedEvent(
    options: SubscribeOptions<ContractCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractCreatedEvent(this, options, fromCount);
  }

  subscribeContractDestroyedEvent(
    options: SubscribeOptions<ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractDestroyedEvent(this, options, fromCount);
  }

  subscribeAllEvents(
    options: SubscribeOptions<ContractCreatedEvent | ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeAllEvents(MetaData.contract, this, options, fromCount);
  }
}
