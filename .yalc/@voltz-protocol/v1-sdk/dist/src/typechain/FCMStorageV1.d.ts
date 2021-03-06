/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface FCMStorageV1Interface extends ethers.utils.Interface {
  functions: {
    "traders(address)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "traders", values: [string]): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "traders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class FCMStorageV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FCMStorageV1Interface;

  functions: {
    traders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        marginInScaledYieldBearingTokens: BigNumber;
        fixedTokenBalance: BigNumber;
        variableTokenBalance: BigNumber;
        isSettled: boolean;
      }
    >;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;
  };

  traders(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      marginInScaledYieldBearingTokens: BigNumber;
      fixedTokenBalance: BigNumber;
      variableTokenBalance: BigNumber;
      isSettled: boolean;
    }
  >;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    traders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        marginInScaledYieldBearingTokens: BigNumber;
        fixedTokenBalance: BigNumber;
        variableTokenBalance: BigNumber;
        isSettled: boolean;
      }
    >;

    underlyingToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    traders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    traders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
