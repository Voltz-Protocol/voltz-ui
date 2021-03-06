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

interface WadRayMathInterface extends ethers.utils.Interface {
  functions: {
    "HALF_RAY()": FunctionFragment;
    "HALF_WAD()": FunctionFragment;
    "RAY()": FunctionFragment;
    "WAD()": FunctionFragment;
    "WAD_RAY_RATIO()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HALF_RAY", values?: undefined): string;
  encodeFunctionData(functionFragment: "HALF_WAD", values?: undefined): string;
  encodeFunctionData(functionFragment: "RAY", values?: undefined): string;
  encodeFunctionData(functionFragment: "WAD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "WAD_RAY_RATIO",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "HALF_RAY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "HALF_WAD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RAY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WAD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WAD_RAY_RATIO",
    data: BytesLike
  ): Result;

  events: {};
}

export class WadRayMath extends BaseContract {
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

  interface: WadRayMathInterface;

  functions: {
    HALF_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    HALF_WAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    WAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    WAD_RAY_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  HALF_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  HALF_WAD(overrides?: CallOverrides): Promise<BigNumber>;

  RAY(overrides?: CallOverrides): Promise<BigNumber>;

  WAD(overrides?: CallOverrides): Promise<BigNumber>;

  WAD_RAY_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    HALF_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    HALF_WAD(overrides?: CallOverrides): Promise<BigNumber>;

    RAY(overrides?: CallOverrides): Promise<BigNumber>;

    WAD(overrides?: CallOverrides): Promise<BigNumber>;

    WAD_RAY_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    HALF_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    HALF_WAD(overrides?: CallOverrides): Promise<BigNumber>;

    RAY(overrides?: CallOverrides): Promise<BigNumber>;

    WAD(overrides?: CallOverrides): Promise<BigNumber>;

    WAD_RAY_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    HALF_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    HALF_WAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WAD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WAD_RAY_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
