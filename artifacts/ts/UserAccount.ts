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
import { default as UserAccountContractJson } from "../test/UserAccount.ral.json";
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
export namespace UserAccountTypes {
  export type Fields = {
    id: HexString;
    address: Address;
    balances: Balances;
    name: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    updateBalance: {
      params: CallContractParams<{ tokens: [TokenBalance, TokenBalance] }>;
      result: CallContractResult<null>;
    };
    updateAddress: {
      params: CallContractParams<{ newAddress: Address }>;
      result: CallContractResult<null>;
    };
    getBalances: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Balances>;
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
    updateBalance: {
      params: SignExecuteContractMethodParams<{
        tokens: [TokenBalance, TokenBalance];
      }>;
      result: SignExecuteScriptTxResult;
    };
    updateAddress: {
      params: SignExecuteContractMethodParams<{ newAddress: Address }>;
      result: SignExecuteScriptTxResult;
    };
    getBalances: {
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
  UserAccountInstance,
  UserAccountTypes.Fields
> {
  encodeFields(fields: UserAccountTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as UserAccountTypes.Fields;
  }

  at(address: string): UserAccountInstance {
    return new UserAccountInstance(address);
  }

  tests = {
    updateBalance: async (
      params: TestContractParamsWithoutMaps<
        UserAccountTypes.Fields,
        { tokens: [TokenBalance, TokenBalance] }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateBalance", params, getContractByCodeHash);
    },
    updateAddress: async (
      params: TestContractParamsWithoutMaps<
        UserAccountTypes.Fields,
        { newAddress: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateAddress", params, getContractByCodeHash);
    },
    getBalances: async (
      params: Omit<
        TestContractParamsWithoutMaps<UserAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Balances>> => {
      return testMethod(this, "getBalances", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const UserAccount = new Factory(
  Contract.fromJson(
    UserAccountContractJson,
    "",
    "4e9f7eac1b76eaa2268b5af6ebb5640252892dc170aad6c1ee7b639131a55816",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class UserAccountInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<UserAccountTypes.State> {
    return fetchContractState(UserAccount, this);
  }

  methods = {
    updateBalance: async (
      params: UserAccountTypes.CallMethodParams<"updateBalance">
    ): Promise<UserAccountTypes.CallMethodResult<"updateBalance">> => {
      return callMethod(
        UserAccount,
        this,
        "updateBalance",
        params,
        getContractByCodeHash
      );
    },
    updateAddress: async (
      params: UserAccountTypes.CallMethodParams<"updateAddress">
    ): Promise<UserAccountTypes.CallMethodResult<"updateAddress">> => {
      return callMethod(
        UserAccount,
        this,
        "updateAddress",
        params,
        getContractByCodeHash
      );
    },
    getBalances: async (
      params?: UserAccountTypes.CallMethodParams<"getBalances">
    ): Promise<UserAccountTypes.CallMethodResult<"getBalances">> => {
      return callMethod(
        UserAccount,
        this,
        "getBalances",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  call = this.methods;

  transaction = {
    updateBalance: async (
      params: UserAccountTypes.SignExecuteMethodParams<"updateBalance">
    ): Promise<UserAccountTypes.SignExecuteMethodResult<"updateBalance">> => {
      return signExecuteMethod(UserAccount, this, "updateBalance", params);
    },
    updateAddress: async (
      params: UserAccountTypes.SignExecuteMethodParams<"updateAddress">
    ): Promise<UserAccountTypes.SignExecuteMethodResult<"updateAddress">> => {
      return signExecuteMethod(UserAccount, this, "updateAddress", params);
    },
    getBalances: async (
      params: UserAccountTypes.SignExecuteMethodParams<"getBalances">
    ): Promise<UserAccountTypes.SignExecuteMethodResult<"getBalances">> => {
      return signExecuteMethod(UserAccount, this, "getBalances", params);
    },
  };

  async multicall<Calls extends UserAccountTypes.MultiCallParams>(
    calls: Calls
  ): Promise<UserAccountTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      UserAccount,
      this,
      calls,
      getContractByCodeHash
    )) as UserAccountTypes.MultiCallResults<Calls>;
  }
}
