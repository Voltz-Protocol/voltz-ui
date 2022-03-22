/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AaveRateOracle,
  AaveRateOracleInterface,
} from "../AaveRateOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aaveLendingPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [
      {
        internalType: "uint256",
        name: "marginRequirement",
        type: "uint256",
      },
    ],
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
    inputs: [
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
    ],
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
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__Exp2InputTooBig",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__FromUintOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "PRBMathUD60x18__LogInputTooSmall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
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
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16",
      },
    ],
    name: "IncreaserateCardinalityNext",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_minSecondsSinceLastUpdate",
        type: "uint256",
      },
    ],
    name: "MinSecondsSinceLastUpdateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTimestampScaled",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "index",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "observedValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "cardinality",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "cardinalityNext",
        type: "uint16",
      },
    ],
    name: "OracleBufferWrite",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "aaveLendingPool",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "getApyFromTo",
    outputs: [
      {
        internalType: "uint256",
        name: "apyFromToWad",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getRateFromTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "rateCardinalityNext",
        type: "uint16",
      },
    ],
    name: "increaseObservationCardinalityNext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "beforeOrAtRateValueRay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apyFromBeforeOrAtToAtOrAfterWad",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeDeltaBeforeOrAtToQueriedTimeWad",
        type: "uint256",
      },
    ],
    name: "interpolateRateValue",
    outputs: [
      {
        internalType: "uint256",
        name: "rateValueRay",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "minSecondsSinceLastUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint216",
        name: "observedValue",
        type: "uint216",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleVars",
    outputs: [
      {
        internalType: "uint16",
        name: "rateIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "rateCardinality",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "rateCardinalityNext",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minSecondsSinceLastUpdate",
        type: "uint256",
      },
    ],
    name: "setMinSecondsSinceLastUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "settlementRateCache",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingYieldBearingProtocolID",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "termStartTimestampInWeiSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "termEndTimestampInWeiSeconds",
        type: "uint256",
      },
    ],
    name: "variableFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "resultWad",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "termStartTimestampInWeiSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "termEndTimestampInWeiSeconds",
        type: "uint256",
      },
    ],
    name: "variableFactorNoCache",
    outputs: [
      {
        internalType: "uint256",
        name: "resultWad",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "writeOracleEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002a4738038062002a47833981016040819052620000349162000346565b80620000403362000169565b60601b6001600160601b0319166080526201000380546001600160a01b0319166001600160a01b038416179055600062000085620001b9602090811b6200077417901c565b620100035460405163d15e005360e01b81526001600160a01b0385811660048301529293506000929091169063d15e00539060240160206040518083038186803b158015620000d357600080fd5b505afa158015620000e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200010e91906200037d565b90506200012d82826004620001cb60201b62000784179092919060201c565b6003805465ffffffff0000191664010000000061ffff9384160263ffff0000191617620100009390921692909202179055506200039692505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001c64262000250565b905090565b600080620001da84846200029a565b8051865460208301516040909301511515600160f81b026001600160f81b036001600160d81b03909416640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9093169290921717919091161790945550600193849350915050565b600063ffffffff821115620002965760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b60448201526064015b60405180910390fd5b5090565b60408051606081018252600080825260208201819052918101919091526001600160d81b03821115620002f95760405162461bcd60e51b81526004016200028d906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b80516001600160a01b03811681146200034157600080fd5b919050565b6000806040838503121562000359578182fd5b620003648362000329565b9150620003746020840162000329565b90509250929050565b6000602082840312156200038f578081fd5b5051919050565b60805160601c61267d620003ca600039600081816101bb01528181610d1301528181610f960152611057015261267d6000f3fe608060405234801561001057600080fd5b50600436106100e65760003560e01c80631195082e146100eb578063252c09d71461012957806325f258dd1461016857806332148f671461017b578063414535281461019057806354124c64146101a35780636f307dc3146101b6578063715018a6146101ea5780637aa4db13146101f25780637cf2cc9f146101fa5780638da5cb5b1461020357806393556dbd1461020b578063bdb050921461021e578063c7db359b14610231578063dd9d05d114610279578063e9d337b814610293578063f2fde38b146102a8578063f739670c146102bb575b600080fd5b6101166100f936600461242e565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61013c6101373660046123b2565b6102ce565b6040805163ffffffff90941684526001600160d81b039092166020840152151590820152606001610120565b6101166101763660046123e2565b610308565b61018e610189366004612390565b610376565b005b61011661019e3660046123e2565b610402565b6101166101b1366004612403565b610416565b6101dd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101209190612460565b61018e61046d565b61018e6104b1565b61011660025481565b6101dd6104fe565b6101166102193660046123e2565b61050d565b61018e61022c3660046123b2565b61059d565b6003546102549061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff94851681529284166020840152921691810191909152606001610120565b610281600181565b60405160ff9091168152602001610120565b62010003546101dd906001600160a01b031681565b61018e6102b6366004612369565b610607565b6101166102c93660046123e2565b6106a7565b60048161ffff81106102df57600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b60008061031584846107f5565b9092509050801561036e57600061033361032e86610926565b610934565b9050600061034361032e86610926565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b505b92915050565b600354600160201b900461ffff16600061039260048385610978565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146103fd576040805161ffff8085168252831660208201527f1f0a33a4e18d81b29e729a440bc8de6a84b65d9fbdf81682d85c3a382296e55e910160405180910390a15b505050565b600061040e83836107f5565b509392505050565b60008061042283610a37565b905060006104306001610a4e565b61043a9086612522565b905060006104488284610a9b565b9050600061045582610ada565b90506104618882610b36565b98975050505050505050565b336104766104fe565b6001600160a01b0316146104a55760405162461bcd60e51b815260040161049c906124c7565b60405180910390fd5b6104af6000610bef565b565b6003546104d69061ffff80821691620100008104821691600160201b90910416610c3f565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b6000546001600160a01b031690565b6000818311156105525760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b604482015260640161049c565b600061055e84846106a7565b9050600061056c8585612590565b9050600061057982610a4e565b9050600061058682610a37565b90506105928482610e35565b979650505050505050565b336105a66104fe565b6001600160a01b0316146105cc5760405162461bcd60e51b815260040161049c906124c7565b60028190556040518181527f19ede2e51d1531988bc60742b8bb97134e9f3a1ec45cf7cf4ea09953f80b2ac59060200160405180910390a150565b336106106104fe565b6001600160a01b0316146106365760405162461bcd60e51b815260040161049c906124c7565b6001600160a01b03811661069b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161049c565b6106a481610bef565b50565b6000818314156106b957506000610370565b60006106c3610774565b905060006106d085610934565b905060006106dd85610934565b600354909150600090610701908590859061ffff8082169162010000900416610e98565b600354909150600090610725908690859061ffff8082169162010000900416610e98565b905081811115610766576000610758610753676765c793fa10079d601b1b61074d8587611232565b90611306565b611312565b965061037095505050505050565b600095505050505050610370565b600061077f42610934565b905090565b6000806107918484611380565b85600082519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790555060019050805b935093915050565b600080600061080661032e86610926565b9050600061081661032e86610926565b905060008263ffffffff16118015610834575060008163ffffffff16115b6108685760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b604482015260640161049c565b63ffffffff808316600090815260016020908152604080832093851683529290522054156108be5763ffffffff80831660009081526001602090815260408083209385168352929052908120549450925061091d565b8063ffffffff166108cd610774565b63ffffffff16106108f9576108ee8263ffffffff168263ffffffff166106a7565b93506001925061091d565b6109168263ffffffff1661090b610774565b63ffffffff166106a7565b9350600192505b50509250929050565b670de0b6b3a7640000900490565b600063ffffffff8211156109745760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b604482015260640161049c565b5090565b6000808361ffff16116109b15760405162461bcd60e51b81526020600482015260016024820152604960f81b604482015260640161049c565b8261ffff168261ffff16116109c7575081610a30565b825b8261ffff168161ffff161015610a2b576001858261ffff1661ffff8110610a0057634e487b7160e01b600052603260045260246000fd5b01805463ffffffff191663ffffffff9290921691909117905580610a23816125c4565b9150506109c9565b508190505b9392505050565b6000610370826a1a1601fc4ea7109e0000006113f8565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f21821115610a8d57604051633492ffd960e01b81526004810183905260240161049c565b50670de0b6b3a76400000290565b600082610ac0578115610aaf576000610ab9565b670de0b6b3a76400005b9050610370565b610a30610ad5610acf8561140d565b846114bd565b6114c9565b600080610aeb633b9aca008461254e565b905082610afc633b9aca008361253a565b1460405180604001604052806002815260200161068760f31b8152509061036e5760405162461bcd60e51b815260040161049c9190612474565b6000821580610b43575081155b15610b5057506000610370565b81610b676002676765c793fa10079d601b1b61253a565b610b7390600019612590565b610b7d919061253a565b83111560405180604001604052806002815260200161068760f31b81525090610bb95760405162461bcd60e51b815260040161049c9190612474565b50676765c793fa10079d601b1b610bd160028261253a565b610bdb848661254e565b610be59190612522565b610a30919061253a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff8110610c6a57634e487b7160e01b600052603260045260246000fd5b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b9091041615159082015290506000610cb4610774565b9050816000015163ffffffff166002548263ffffffff16610cd59190612590565b1015610ce85786869350935050506107ed565b620100035460405163d15e005360e01b81526000916001600160a01b03169063d15e005390610d3b907f000000000000000000000000000000000000000000000000000000000000000090600401612460565b60206040518083038186803b158015610d5357600080fd5b505afa158015610d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8b91906123ca565b905080610dab5760405163bd89c5af60e01b815260040160405180910390fd5b7f43bca372be3e74f9c236cf54450ec01eb2d011690a24a7402ddff4e41267e447610dd461150f565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a1610e2660048984848b8b61151a565b94509450505050935093915050565b600082610e4457506000610370565b6000610e6c610e6685610e576001610a4e565b610e619190612522565b61140d565b846113f8565b90506000610e79826114c9565b9050610e856001610a4e565b610e8f9082612590565b95945050505050565b60008363ffffffff168563ffffffff161015610edc5760405162461bcd60e51b81526020600482015260036024820152624f4f4f60e81b604482015260640161049c565b8363ffffffff168563ffffffff16141561102c57610ef8612335565b60048461ffff1661ffff8110610f1e57634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529092509087161461101557620100035460405163d15e005360e01b81526001600160a01b039091169063d15e005390610fbe907f000000000000000000000000000000000000000000000000000000000000000090600401612460565b60206040518083038186803b158015610fd657600080fd5b505afa158015610fea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100e91906123ca565b9150611026565b80602001516001600160d81b031691505b5061122a565b620100035460405163d15e005360e01b81526000916001600160a01b03169063d15e00539061107f907f000000000000000000000000000000000000000000000000000000000000000090600401612460565b60206040518083038186803b15801561109757600080fd5b505afa1580156110ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cf91906123ca565b90506000806110e260048885898961167e565b91509150816000015163ffffffff168763ffffffff1614156111135781602001516001600160d81b03169350611226565b805163ffffffff8881169116141561113a5780602001516001600160d81b03169350611226565b600082602001516001600160d81b031682602001516001600160d81b031611156111a2576000611193676765c793fa10079d601b1b61074d85602001516001600160d81b031687602001516001600160d81b0316611232565b905061119e81611312565b9150505b60006111d3670de0b6b3a7640000855185516111be91906125a7565b63ffffffff166111ce919061254e565b610a37565b905060006111e18383610e35565b905061122085602001516001600160d81b031682611204670de0b6b3a764000090565b8851611210908f6125a7565b63ffffffff166101b1919061254e565b96505050505b5050505b949350505050565b604080518082019091526002815261035360f41b60208201526000908261126c5760405162461bcd60e51b815260040161049c9190612474565b50600061127a60028461253a565b9050676765c793fa10079d601b1b61129482600019612590565b61129e919061253a565b84111560405180604001604052806002815260200161068760f31b815250906112da5760405162461bcd60e51b815260040161049c9190612474565b5082816112f2676765c793fa10079d601b1b8761254e565b6112fc9190612522565b61122a919061253a565b6000610a308284612590565b6000806113246002633b9aca0061253a565b905060006113328483612522565b90508181101560405180604001604052806002815260200161343960f01b815250906113715760405162461bcd60e51b815260040161049c9190612474565b5061122a633b9aca008261253a565b611388612335565b6001600160d81b038211156113c85760405162461bcd60e51b815260040161049c906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b6000610a3083670de0b6b3a76400008461184c565b6000670de0b6b3a764000082101561143b57604051633621413760e21b81526004810183905260240161049c565b6000611450670de0b6b3a76400008404611928565b670de0b6b3a7640000808202935090915083821c90811415611473575050919050565b6706f05b59d3b200005b80156114b557670de0b6b3a7640000828002049150671bc16d674ec8000082106114ad579283019260019190911c905b60011c61147d565b505050919050565b6000610a308383611a0b565b6000680a688906bd8b00000082106114f757604051634a4f26f160e01b81526004810183905260240161049c565b670de0b6b3a7640000604083901b04610a3081611acd565b600061077f42610a4e565b6000806000888861ffff1661ffff811061154457634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff16151593830193909352909250908816141561159f5787859250925050611673565b8461ffff168461ffff161180156115c757506115bc60018661256d565b61ffff168861ffff16145b156115d4578391506115d8565b8491505b816115e48960016124fc565b6115ee91906125e6565b92506115fa8787611380565b898461ffff1661ffff811061161f57634e487b7160e01b600052603260045260246000fd5b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff909416939093171792909216179055505b965096945050505050565b611686612335565b61168e612335565b868461ffff1661ffff81106116b357634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090871610611732578563ffffffff16826000015163ffffffff16141561171e57611842565b816117298787611380565b91509150611842565b868361173f8660016124fc565b61174991906125e6565b61ffff1661ffff811061176c57634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905292506117f15760408051606081018252885463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff808816911611156118315760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015260640161049c565b61183d8787868661215f565b915091505b9550959350505050565b6000808060001985870985870292508281108382030391505080600014156118955783828161188b57634e487b7160e01b600052601260045260246000fd5b0492505050610a30565b8381106118bf57604051631dcf306360e21b8152600481018290526024810185905260440161049c565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061194857608091821c916119459082612522565b90505b600160401b821061196657604091821c916119639082612522565b90505b600160201b821061198457602091821c916119819082612522565b90505b6201000082106119a157601091821c9161199e9082612522565b90505b61010082106119bd57600891821c916119ba9082612522565b90505b601082106119d857600491821c916119d59082612522565b90505b600482106119f357600291821c916119f09082612522565b90505b60028210611a0657610370600182612522565b919050565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110611a4f5760405163698d9a0160e11b81526004810182905260240161049c565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182611a895780670de0b6b3a7640000850401945050505050610370565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b821615611aed5768016a09e667f3bcc9090260401c5b6001603e1b821615611b08576801306fe0a31b7152df0260401c5b6001603d1b821615611b23576801172b83c7d517adce0260401c5b6001603c1b821615611b3e5768010b5586cf9890f62a0260401c5b6001603b1b821615611b59576801059b0d31585743ae0260401c5b6001603a1b821615611b7457680102c9a3e778060ee70260401c5b600160391b821615611b8f5768010163da9fb33356d80260401c5b600160381b821615611baa57680100b1afa5abcbed610260401c5b600160371b821615611bc55768010058c86da1c09ea20260401c5b600160361b821615611be0576801002c605e2e8cec500260401c5b600160351b821615611bfb57680100162f3904051fa10260401c5b600160341b821615611c16576801000b175effdc76ba0260401c5b600160331b821615611c3157680100058ba01fb9f96d0260401c5b600160321b821615611c4c5768010002c5cc37da94920260401c5b600160311b821615611c67576801000162e525ee05470260401c5b600160301b821615611c825768010000b17255775c040260401c5b6001602f1b821615611c9d576801000058b91b5bc9ae0260401c5b6001602e1b821615611cb857680100002c5c89d5ec6d0260401c5b6001602d1b821615611cd35768010000162e43f4f8310260401c5b6001602c1b821615611cee57680100000b1721bcfc9a0260401c5b6001602b1b821615611d095768010000058b90cf1e6e0260401c5b6001602a1b821615611d24576801000002c5c863b73f0260401c5b600160291b821615611d3f57680100000162e430e5a20260401c5b600160281b821615611d5a576801000000b1721835510260401c5b600160271b821615611d7557680100000058b90c0b490260401c5b600160261b821615611d905768010000002c5c8601cc0260401c5b600160251b821615611dab576801000000162e42fff00260401c5b600160241b821615611dc65768010000000b17217fbb0260401c5b600160231b821615611de1576801000000058b90bfce0260401c5b600160221b821615611dfc57680100000002c5c85fe30260401c5b600160211b821615611e175768010000000162e42ff10260401c5b600160201b821615611e3257680100000000b17217f80260401c5b6380000000821615611e4d5768010000000058b90bfc0260401c5b6340000000821615611e68576801000000002c5c85fe0260401c5b6320000000821615611e8357680100000000162e42ff0260401c5b6310000000821615611e9e576801000000000b17217f0260401c5b6308000000821615611eb957680100000000058b90c00260401c5b6304000000821615611ed45768010000000002c5c8600260401c5b6302000000821615611eef576801000000000162e4300260401c5b6301000000821615611f0a5768010000000000b172180260401c5b62800000821615611f24576801000000000058b90c0260401c5b62400000821615611f3e57680100000000002c5c860260401c5b62200000821615611f585768010000000000162e430260401c5b62100000821615611f7257680100000000000b17210260401c5b62080000821615611f8c5768010000000000058b910260401c5b62040000821615611fa6576801000000000002c5c80260401c5b62020000821615611fc057680100000000000162e40260401c5b62010000821615611fd95761b172600160401b010260401c5b618000821615611ff1576158b9600160401b010260401c5b61400082161561200957612c5d600160401b010260401c5b6120008216156120215761162e600160401b010260401c5b61100082161561203957610b17600160401b010260401c5b6108008216156120515761058c600160401b010260401c5b610400821615612069576102c6600160401b010260401c5b61020082161561208157610163600160401b010260401c5b6101008216156120985760b1600160401b010260401c5b60808216156120ae576059600160401b010260401c5b60408216156120c457602c600160401b010260401c5b60208216156120da576016600160401b010260401c5b60108216156120f057600b600160401b010260401c5b6008821615612106576006600160401b010260401c5b600482161561211c576003600160401b010260401c5b6002821615612132576001600160401b010260401c5b6001821615612148576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b612167612335565b61216f612335565b60008361217d8660016124fc565b61218791906125e6565b61ffff169050600060018561ffff16836121a19190612522565b6121ab9190612590565b905060005b60026121bc8385612522565b6121c6919061253a565b9050886121d761ffff881683612607565b61ffff81106121f657634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff161515918101829052955061224d57612246816001612522565b92506121b0565b8861ffff871661225e836001612522565b6122689190612607565b61ffff811061228757634e487b7160e01b600052603260045260246000fd5b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff16151592820192909252865190955089821691161180159081906122f35750846000015163ffffffff168963ffffffff1611155b156122fe5750612329565b806123155761230e600183612590565b9250612323565b612320826001612522565b93505b506121b0565b50505094509492505050565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff81168114611a0657600080fd5b60006020828403121561237a578081fd5b81356001600160a01b0381168114610a30578182fd5b6000602082840312156123a1578081fd5b813561ffff81168114610a30578182fd5b6000602082840312156123c3578081fd5b5035919050565b6000602082840312156123db578081fd5b5051919050565b600080604083850312156123f4578081fd5b50508035926020909101359150565b600080600060608486031215612417578081fd5b505081359360208301359350604090920135919050565b60008060408385031215612440578182fd5b61244983612355565b915061245760208401612355565b90509250929050565b6001600160a01b0391909116815260200190565b6000602080835283518082850152825b818110156124a057858101830151858201604001528201612484565b818111156124b15783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600061ffff8083168185168083038211156125195761251961261b565b01949350505050565b600082198211156125355761253561261b565b500190565b60008261254957612549612631565b500490565b60008160001904831182151516156125685761256861261b565b500290565b600061ffff838116908316818110156125885761258861261b565b039392505050565b6000828210156125a2576125a261261b565b500390565b600063ffffffff838116908316818110156125885761258861261b565b600061ffff808316818114156125dc576125dc61261b565b6001019392505050565b600061ffff808416806125fb576125fb612631565b92169190910692915050565b60008261261657612616612631565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea26469706673582212202694e7e2593f9f449e42639ffb4cc3bbc7231e2e1437d1c5663a0889ce36915264736f6c63430008040033";

export class AaveRateOracle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _aaveLendingPool: string,
    underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveRateOracle> {
    return super.deploy(
      _aaveLendingPool,
      underlying,
      overrides || {}
    ) as Promise<AaveRateOracle>;
  }
  getDeployTransaction(
    _aaveLendingPool: string,
    underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _aaveLendingPool,
      underlying,
      overrides || {}
    );
  }
  attach(address: string): AaveRateOracle {
    return super.attach(address) as AaveRateOracle;
  }
  connect(signer: Signer): AaveRateOracle__factory {
    return super.connect(signer) as AaveRateOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveRateOracleInterface {
    return new utils.Interface(_abi) as AaveRateOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveRateOracle {
    return new Contract(address, _abi, signerOrProvider) as AaveRateOracle;
  }
}
