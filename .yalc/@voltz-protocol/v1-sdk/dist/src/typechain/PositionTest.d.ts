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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PositionTestInterface extends ethers.utils.Interface {
  functions: {
    "calculateFeeDelta(uint256)": FunctionFragment;
    "calculateFixedAndVariableDelta(int256,int256)": FunctionFragment;
    "position()": FunctionFragment;
    "updateBalances(int256,int256)": FunctionFragment;
    "updateFeeGrowthInside(uint256)": FunctionFragment;
    "updateFixedAndVariableTokenGrowthInside(int256,int256)": FunctionFragment;
    "updateLiquidity(int128)": FunctionFragment;
    "updateMargin(int256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateFeeDelta",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFixedAndVariableDelta",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "position", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBalances",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeGrowthInside",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFixedAndVariableTokenGrowthInside",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMargin",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateFeeDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFixedAndVariableDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFixedAndVariableTokenGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMargin",
    data: BytesLike
  ): Result;

  events: {};
}

export class PositionTest extends BaseContract {
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

  interface: PositionTestInterface;

  functions: {
    calculateFeeDelta(
      feeGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { feeDelta: BigNumber }>;

    calculateFixedAndVariableDelta(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _fixedTokenBalance: BigNumber;
        _variableTokenBalance: BigNumber;
      }
    >;

    position(
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isSettled: boolean;
        _liquidity: BigNumber;
        margin: BigNumber;
        fixedTokenGrowthInsideLastX128: BigNumber;
        variableTokenGrowthInsideLastX128: BigNumber;
        fixedTokenBalance: BigNumber;
        variableTokenBalance: BigNumber;
        feeGrowthInsideLastX128: BigNumber;
        rewardPerAmount: BigNumber;
      }
    >;

    updateBalances(
      fixedTokenBalanceDelta: BigNumberish,
      variableTokenBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFeeGrowthInside(
      feeGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFixedAndVariableTokenGrowthInside(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateLiquidity(
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMargin(
      marginDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateFeeDelta(
    feeGrowthInside: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateFixedAndVariableDelta(
    fixedTokenGrowthInside: BigNumberish,
    variableTokenGrowthInside: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      _fixedTokenBalance: BigNumber;
      _variableTokenBalance: BigNumber;
    }
  >;

  position(
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      isSettled: boolean;
      _liquidity: BigNumber;
      margin: BigNumber;
      fixedTokenGrowthInsideLastX128: BigNumber;
      variableTokenGrowthInsideLastX128: BigNumber;
      fixedTokenBalance: BigNumber;
      variableTokenBalance: BigNumber;
      feeGrowthInsideLastX128: BigNumber;
      rewardPerAmount: BigNumber;
    }
  >;

  updateBalances(
    fixedTokenBalanceDelta: BigNumberish,
    variableTokenBalanceDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFeeGrowthInside(
    feeGrowthInside: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFixedAndVariableTokenGrowthInside(
    fixedTokenGrowthInside: BigNumberish,
    variableTokenGrowthInside: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateLiquidity(
    liquidityDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMargin(
    marginDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateFeeDelta(
      feeGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFixedAndVariableDelta(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        _fixedTokenBalance: BigNumber;
        _variableTokenBalance: BigNumber;
      }
    >;

    position(
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        isSettled: boolean;
        _liquidity: BigNumber;
        margin: BigNumber;
        fixedTokenGrowthInsideLastX128: BigNumber;
        variableTokenGrowthInsideLastX128: BigNumber;
        fixedTokenBalance: BigNumber;
        variableTokenBalance: BigNumber;
        feeGrowthInsideLastX128: BigNumber;
        rewardPerAmount: BigNumber;
      }
    >;

    updateBalances(
      fixedTokenBalanceDelta: BigNumberish,
      variableTokenBalanceDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFeeGrowthInside(
      feeGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFixedAndVariableTokenGrowthInside(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLiquidity(
      liquidityDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMargin(
      marginDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calculateFeeDelta(
      feeGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateFixedAndVariableDelta(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    position(overrides?: CallOverrides): Promise<BigNumber>;

    updateBalances(
      fixedTokenBalanceDelta: BigNumberish,
      variableTokenBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFeeGrowthInside(
      feeGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFixedAndVariableTokenGrowthInside(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateLiquidity(
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMargin(
      marginDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateFeeDelta(
      feeGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateFixedAndVariableDelta(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    position(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateBalances(
      fixedTokenBalanceDelta: BigNumberish,
      variableTokenBalanceDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFeeGrowthInside(
      feeGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFixedAndVariableTokenGrowthInside(
      fixedTokenGrowthInside: BigNumberish,
      variableTokenGrowthInside: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateLiquidity(
      liquidityDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMargin(
      marginDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
