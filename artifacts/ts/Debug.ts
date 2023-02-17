/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractCreatedEvent,
  subscribeContractDestroyedEvent,
  subscribeContractEvent,
  subscribeAllEvents,
  testMethod,
  callMethod,
  fetchContractState,
  ContractCreatedEvent,
  ContractDestroyedEvent,
  ContractInstance,
} from "@alephium/web3";
import { default as DebugContractJson } from "../test/debug.ral.json";

// Custom types for the contract
export namespace DebugTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<DebugInstance, {}> {
  at(address: string): DebugInstance {
    return new DebugInstance(address);
  }

  async testDebugMethod(
    params?: Omit<
      TestContractParams<never, never>,
      "testArgs" | "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "debug", params === undefined ? {} : params);
  }
}

// Use this object to test and deploy the contract
export const Debug = new Factory(
  Contract.fromJson(
    DebugContractJson,
    "=4-2+13=11+2ca7e=1+20748656c6c6f2c200121",
    "0ffc72054e3668c8933e53c892947dea1963c0c24cc006a4fb0aa028c13a7e13"
  )
);

// Use this class to interact with the blockchain
export class DebugInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DebugTypes.State> {
    return fetchContractState(Debug, this);
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
    return subscribeAllEvents(Debug.contract, this, options, fromCount);
  }
}
