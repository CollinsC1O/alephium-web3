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
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as SubContractJson } from "../sub/Sub.ral.json";
import { getContractByCodeHash } from "./contracts";
import {
  AddStruct1,
  AddStruct2,
  Balances,
  MapValue,
  TokenBalance,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace SubTypes {
  export type Fields = {
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type SubEvent = ContractEvent<{ x: bigint; y: bigint }>;

  export interface CallMethodTable {
    sub: {
      params: CallContractParams<{ array: [bigint, bigint] }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    sub: {
      params: SignExecuteContractMethodParams<{ array: [bigint, bigint] }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<SubInstance, SubTypes.Fields> {
  encodeFields(fields: SubTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as SubTypes.Fields;
  }

  eventIndex = { Sub: 0 };

  at(address: string): SubInstance {
    return new SubInstance(address);
  }

  tests = {
    sub: async (
      params: TestContractParamsWithoutMaps<
        SubTypes.Fields,
        { array: [bigint, bigint] }
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "sub", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const Sub = new Factory(
  Contract.fromJson(
    SubContractJson,
    "",
    "3461ebfaca02ad0a3f587a5b67a461c0cbd82d14261407b1d9277ed4ad129234",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class SubInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SubTypes.State> {
    return fetchContractState(Sub, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSubEvent(
    options: EventSubscribeOptions<SubTypes.SubEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Sub.contract,
      this,
      options,
      "Sub",
      fromCount
    );
  }

  methods = {
    sub: async (
      params: SubTypes.CallMethodParams<"sub">
    ): Promise<SubTypes.CallMethodResult<"sub">> => {
      return callMethod(Sub, this, "sub", params, getContractByCodeHash);
    },
  };

  call = this.methods;

  transaction = {
    sub: async (
      params: SubTypes.SignExecuteMethodParams<"sub">
    ): Promise<SubTypes.SignExecuteMethodResult<"sub">> => {
      return signExecuteMethod(Sub, this, "sub", params);
    },
  };

  async multicall<Calls extends SubTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SubTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Sub,
      this,
      calls,
      getContractByCodeHash
    )) as SubTypes.MultiCallResults<Calls>;
  }
}
