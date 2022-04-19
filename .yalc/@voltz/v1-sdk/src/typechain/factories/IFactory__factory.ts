/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFactory, IFactoryInterface } from "../IFactory";

const _abi = [
  {
    inputs: [],
    name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "unlocked",
        type: "bool",
      },
    ],
    name: "CanOnlyTradeIfUnlocked",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotLiquidate",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotSettleBeforeMaturity",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "DebugError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    name: "ExpectedOppositeSigns",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "ExpectedSqrtPriceZeroBeforeInit",
    type: "error",
  },
  {
    inputs: [],
    name: "IRSNotionalAmountSpecifiedMustBeNonZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidMarginDelta",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInBurn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
    ],
    name: "LiquidityDeltaMustBePositiveInMint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginLessThanMinimum",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "fixedTokenDelta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenDelta",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "cumulativeFeeIncurred",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "fixedTokenDeltaUnbalanced",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "marginRequirement",
        type: "int256",
      },
    ],
    name: "MarginRequirementNotMetFCM",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "NotEnoughFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "OOO",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyFCM",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyMarginEngine",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerCanUpdatePosition",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyVAMM",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNetZero",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNotSettled",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalExceedsCurrentMargin",
    type: "error",
  },
  {
    inputs: [],
    name: "closeToOrBeyondMaturity",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "intAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20Minimal",
        name: "underlyingToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IRateOracle",
        name: "rateOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "termStartTimestampWad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "termEndTimestampWad",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "contract IMarginEngine",
        name: "marginEngine",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IVAMM",
        name: "vamm",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IFCM",
        name: "fcm",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "underlyingTokenDecimals",
        type: "uint8",
      },
    ],
    name: "IrsInstance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IFCM",
        name: "masterFCMAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "MasterFCM",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPeriphery",
        name: "periphery",
        type: "address",
      },
    ],
    name: "PeripheryUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Minimal",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "contract IRateOracle",
        name: "_rateOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_termStartTimestampWad",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_termEndTimestampWad",
        type: "uint256",
      },
      {
        internalType: "int24",
        name: "_tickSpacing",
        type: "int24",
      },
    ],
    name: "deployIrsInstance",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "marginEngineProxy",
        type: "address",
      },
      {
        internalType: "contract IVAMM",
        name: "vammProxy",
        type: "address",
      },
      {
        internalType: "contract IFCM",
        name: "fcmProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "intAddress",
        type: "address",
      },
    ],
    name: "isApproved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "masterFCMs",
    outputs: [
      {
        internalType: "contract IFCM",
        name: "masterFCM",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterMarginEngine",
    outputs: [
      {
        internalType: "contract IMarginEngine",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterVAMM",
    outputs: [
      {
        internalType: "contract IVAMM",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periphery",
    outputs: [
      {
        internalType: "contract IPeriphery",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "intAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowIntegration",
        type: "bool",
      },
    ],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IFCM",
        name: "masterFCM",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "yieldBearingProtocolID",
        type: "uint8",
      },
    ],
    name: "setMasterFCM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarginEngine",
        name: "_masterMarginEngine",
        type: "address",
      },
    ],
    name: "setMasterMarginEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_masterVAMM",
        type: "address",
      },
    ],
    name: "setMasterVAMM",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPeriphery",
        name: "_periphery",
        type: "address",
      },
    ],
    name: "setPeriphery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IFactoryInterface {
    return new utils.Interface(_abi) as IFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFactory {
    return new Contract(address, _abi, signerOrProvider) as IFactory;
  }
}
