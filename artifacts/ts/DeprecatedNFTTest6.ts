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
import { default as DeprecatedNFTTest6ContractJson } from "../nft/DeprecatedNFTTest6.ral.json";
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
export namespace DeprecatedNFTTest6Types {
  export type Fields = {
    collectionId: HexString;
    uri: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getArray: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[bigint, bigint]>;
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
    getTokenUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getArray: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  DeprecatedNFTTest6Instance,
  DeprecatedNFTTest6Types.Fields
> {
  encodeFields(fields: DeprecatedNFTTest6Types.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as DeprecatedNFTTest6Types.Fields;
  }

  at(address: string): DeprecatedNFTTest6Instance {
    return new DeprecatedNFTTest6Instance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest6Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params, getContractByCodeHash);
    },
    getArray: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest6Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(this, "getArray", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const DeprecatedNFTTest6 = new Factory(
  Contract.fromJson(
    DeprecatedNFTTest6ContractJson,
    "",
    "8bc0d39f0607d4a771ec70ae1057b71dbcde404177cb3b25fd7d93d553a2b8cd",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DeprecatedNFTTest6Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeprecatedNFTTest6Types.State> {
    return fetchContractState(DeprecatedNFTTest6, this);
  }

  methods = {
    getTokenUri: async (
      params?: DeprecatedNFTTest6Types.CallMethodParams<"getTokenUri">
    ): Promise<DeprecatedNFTTest6Types.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        DeprecatedNFTTest6,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getArray: async (
      params?: DeprecatedNFTTest6Types.CallMethodParams<"getArray">
    ): Promise<DeprecatedNFTTest6Types.CallMethodResult<"getArray">> => {
      return callMethod(
        DeprecatedNFTTest6,
        this,
        "getArray",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  call = this.methods;

  transaction = {
    getTokenUri: async (
      params: DeprecatedNFTTest6Types.SignExecuteMethodParams<"getTokenUri">
    ): Promise<
      DeprecatedNFTTest6Types.SignExecuteMethodResult<"getTokenUri">
    > => {
      return signExecuteMethod(DeprecatedNFTTest6, this, "getTokenUri", params);
    },
    getArray: async (
      params: DeprecatedNFTTest6Types.SignExecuteMethodParams<"getArray">
    ): Promise<DeprecatedNFTTest6Types.SignExecuteMethodResult<"getArray">> => {
      return signExecuteMethod(DeprecatedNFTTest6, this, "getArray", params);
    },
  };

  async multicall<Calls extends DeprecatedNFTTest6Types.MultiCallParams>(
    calls: Calls
  ): Promise<DeprecatedNFTTest6Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      DeprecatedNFTTest6,
      this,
      calls,
      getContractByCodeHash
    )) as DeprecatedNFTTest6Types.MultiCallResults<Calls>;
  }
}
