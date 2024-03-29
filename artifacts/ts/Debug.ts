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
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as DebugContractJson } from "../test/Debug.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace DebugTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<DebugInstance, {}> {
  at(address: string): DebugInstance {
    return new DebugInstance(address);
  }

  tests = {
    debug: async (
      params?: Omit<
        TestContractParams<never, never, {}>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResult<null, {}>> => {
      return testMethod(this, "debug", params === undefined ? {} : params);
    },
  };
}

// Use this object to test and deploy the contract
export const Debug = new Factory(
  Contract.fromJson(
    DebugContractJson,
    "=4-2+13=11+2ca7e=1+20748656c6c6f2c200121",
    "0ffc72054e3668c8933e53c892947dea1963c0c24cc006a4fb0aa028c13a7e13",
    AllStructs
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
}
