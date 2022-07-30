"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAaveLendingPool__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                internalType: "contract IERC20Minimal",
                name: "asset",
                type: "address",
            },
        ],
        name: "getReserveData",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "data",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct IAaveV2LendingPool.ReserveConfigurationMap",
                        name: "configuration",
                        type: "tuple",
                    },
                    {
                        internalType: "uint128",
                        name: "liquidityIndex",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "variableBorrowIndex",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "currentLiquidityRate",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "currentVariableBorrowRate",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "currentStableBorrowRate",
                        type: "uint128",
                    },
                    {
                        internalType: "uint40",
                        name: "lastUpdateTimestamp",
                        type: "uint40",
                    },
                    {
                        internalType: "address",
                        name: "aTokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "stableDebtTokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "variableDebtTokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "interestRateStrategyAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint8",
                        name: "id",
                        type: "uint8",
                    },
                ],
                internalType: "struct IAaveV2LendingPool.ReserveData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Minimal",
                name: "_underlyingAsset",
                type: "address",
            },
        ],
        name: "getReserveNormalizedIncome",
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
                internalType: "contract IERC20Minimal",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "aTokenAddress",
                type: "address",
            },
        ],
        name: "initReserve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Minimal",
                name: "_underlyingAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_factorPerSecondInRay",
                type: "uint256",
            },
        ],
        name: "setFactorPerSecondInRay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Minimal",
                name: "_underlyingAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_reserveNormalizedIncome",
                type: "uint256",
            },
        ],
        name: "setReserveNormalizedIncome",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Minimal",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50611170806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806335ea6a7514610067578063455ee00c1461009057806369328dec146100c85780636c3fbb80146100e9578063d15e0053146100fc578063fdb387d51461010f575b600080fd5b61007a610075366004610f18565b610139565b6040516100879190610f4f565b60405180910390f35b6100c661009e366004611035565b6001600160a01b03909116600090815260208181526040808320939093556001905220429055565b005b6100db6100d6366004611061565b610218565b604051908152602001610087565b6100c66100f73660046110a3565b610353565b6100db61010a366004610f18565b61046f565b6100c661011d366004611035565b6001600160a01b03909116600090815260026020526040902055565b610141610e95565b506001600160a01b0390811660009081526003602081815260409283902083516101a08101855281546101808201908152815260018201546001600160801b0380821694830194909452600160801b9081900484169582019590955260028201548084166060830152859004831660808201529281015491821660a084015292900464ffffffffff1660c08201526004820154831660e08201526005820154831661010082015260068201548316610120820152600790910154918216610140820152600160a01b90910460ff1661016082015290565b6001600160a01b0383811660009081526003602052604080822060048082015492516370a0823160e01b8152339181019190915292939092911690839082906370a082319060240160206040518083038186803b15801561027857600080fd5b505afa15801561028c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b091906110dc565b9050856000198114156102c05750805b826001600160a01b031663d7020d0a3388846102db8d61046f565b6040516001600160e01b031960e087901b1681526001600160a01b03948516600482015293909216602484015260448301526064820152608401600060405180830381600087803b15801561032f57600080fd5b505af1158015610343573d6000803e3d6000fd5b50929a9950505050505050505050565b61035b610e95565b6001600160a01b0391821660e08201908152928216600090815260036020818152604092839020845151815590840151928401516001600160801b03908116600160801b908102948216949094176001830155606085015160808601518216850290821617600283015560a0850151928201805460c087015164ffffffffff169095026001600160a81b031995861694909216939093171790915593516004850180549185166001600160a01b031992831617905561010083015160058601805491861691831691909117905561012083015160068601805491861691909216179055610140820151600790940180546101609093015160ff16600160a01b02929091169390921692909217919091179055565b6001600160a01b03811660009081526002602052604081205480156104e8576001600160a01b0383166000908152600160205260408120546104b1904261110b565b6001600160a01b0385166000908152602081905260409020549091506104e0906104db8484610505565b61054d565b949350505050565b50506001600160a01b031660009081526020819052604090205490565b60008261052a578115610519576000610523565b670de0b6b3a76400005b9050610547565b61054461053f61053985610559565b8461054d565b61060e565b90505b92915050565b6000610544838361065b565b6000670de0b6b3a764000082101561058c57604051633621413760e21b8152600481018390526024015b60405180910390fd5b60006105a1670de0b6b3a7640000840461071d565b670de0b6b3a7640000808202935090915083821c908114156105c4575050919050565b6706f05b59d3b200005b801561060657670de0b6b3a7640000828002049150671bc16d674ec8000082106105fe579283019260019190911c905b60011c6105ce565b505050919050565b6000680a688906bd8b000000821061063c57604051634a4f26f160e01b815260048101839052602401610583565b670de0b6b3a7640000604083901b0461065481610803565b9392505050565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061069f5760405163698d9a0160e11b815260048101829052602401610583565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826106d95780670de0b6b3a7640000850401945050505050610547565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b6000600160801b821061073d57608091821c9161073a9082611122565b90505b600160401b821061075b57604091821c916107589082611122565b90505b600160201b821061077957602091821c916107769082611122565b90505b62010000821061079657601091821c916107939082611122565b90505b61010082106107b257600891821c916107af9082611122565b90505b601082106107cd57600491821c916107ca9082611122565b90505b600482106107e857600291821c916107e59082611122565b90505b600282106107fe576107fb600182611122565b90505b919050565b600160bf1b6001603f1b8216156108235768016a09e667f3bcc9090260401c5b6001603e1b82161561083e576801306fe0a31b7152df0260401c5b6001603d1b821615610859576801172b83c7d517adce0260401c5b6001603c1b8216156108745768010b5586cf9890f62a0260401c5b6001603b1b82161561088f576801059b0d31585743ae0260401c5b6001603a1b8216156108aa57680102c9a3e778060ee70260401c5b600160391b8216156108c55768010163da9fb33356d80260401c5b600160381b8216156108e057680100b1afa5abcbed610260401c5b600160371b8216156108fb5768010058c86da1c09ea20260401c5b600160361b821615610916576801002c605e2e8cec500260401c5b600160351b82161561093157680100162f3904051fa10260401c5b600160341b82161561094c576801000b175effdc76ba0260401c5b600160331b82161561096757680100058ba01fb9f96d0260401c5b600160321b8216156109825768010002c5cc37da94920260401c5b600160311b82161561099d576801000162e525ee05470260401c5b600160301b8216156109b85768010000b17255775c040260401c5b6001602f1b8216156109d3576801000058b91b5bc9ae0260401c5b6001602e1b8216156109ee57680100002c5c89d5ec6d0260401c5b6001602d1b821615610a095768010000162e43f4f8310260401c5b6001602c1b821615610a2457680100000b1721bcfc9a0260401c5b6001602b1b821615610a3f5768010000058b90cf1e6e0260401c5b6001602a1b821615610a5a576801000002c5c863b73f0260401c5b600160291b821615610a7557680100000162e430e5a20260401c5b600160281b821615610a90576801000000b1721835510260401c5b600160271b821615610aab57680100000058b90c0b490260401c5b600160261b821615610ac65768010000002c5c8601cc0260401c5b600160251b821615610ae1576801000000162e42fff00260401c5b600160241b821615610afc5768010000000b17217fbb0260401c5b600160231b821615610b17576801000000058b90bfce0260401c5b600160221b821615610b3257680100000002c5c85fe30260401c5b600160211b821615610b4d5768010000000162e42ff10260401c5b600160201b821615610b6857680100000000b17217f80260401c5b6380000000821615610b835768010000000058b90bfc0260401c5b6340000000821615610b9e576801000000002c5c85fe0260401c5b6320000000821615610bb957680100000000162e42ff0260401c5b6310000000821615610bd4576801000000000b17217f0260401c5b6308000000821615610bef57680100000000058b90c00260401c5b6304000000821615610c0a5768010000000002c5c8600260401c5b6302000000821615610c25576801000000000162e4300260401c5b6301000000821615610c405768010000000000b172180260401c5b62800000821615610c5a576801000000000058b90c0260401c5b62400000821615610c7457680100000000002c5c860260401c5b62200000821615610c8e5768010000000000162e430260401c5b62100000821615610ca857680100000000000b17210260401c5b62080000821615610cc25768010000000000058b910260401c5b62040000821615610cdc576801000000000002c5c80260401c5b62020000821615610cf657680100000000000162e40260401c5b62010000821615610d0f5761b172600160401b010260401c5b618000821615610d27576158b9600160401b010260401c5b614000821615610d3f57612c5d600160401b010260401c5b612000821615610d575761162e600160401b010260401c5b611000821615610d6f57610b17600160401b010260401c5b610800821615610d875761058c600160401b010260401c5b610400821615610d9f576102c6600160401b010260401c5b610200821615610db757610163600160401b010260401c5b610100821615610dce5760b1600160401b010260401c5b6080821615610de4576059600160401b010260401c5b6040821615610dfa57602c600160401b010260401c5b6020821615610e10576016600160401b010260401c5b6010821615610e2657600b600160401b010260401c5b6008821615610e3c576006600160401b010260401c5b6004821615610e52576003600160401b010260401c5b6002821615610e68576001600160401b010260401c5b6001821615610e7e576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516101a08101825260006101808201818152825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915290565b6001600160a01b0381168114610f1557600080fd5b50565b600060208284031215610f2a57600080fd5b813561065481610f00565b6001600160801b03169052565b6001600160a01b03169052565b815151815261018081016020830151610f6b6020840182610f35565b506040830151610f7e6040840182610f35565b506060830151610f916060840182610f35565b506080830151610fa46080840182610f35565b5060a0830151610fb760a0840182610f35565b5060c0830151610fd060c084018264ffffffffff169052565b5060e0830151610fe360e0840182610f42565b5061010080840151610ff782850182610f42565b50506101208084015161100c82850182610f42565b50506101408084015161102182850182610f42565b50506101609283015160ff16919092015290565b6000806040838503121561104857600080fd5b823561105381610f00565b946020939093013593505050565b60008060006060848603121561107657600080fd5b833561108181610f00565b925060208401359150604084013561109881610f00565b809150509250925092565b600080604083850312156110b657600080fd5b82356110c181610f00565b915060208301356110d181610f00565b809150509250929050565b6000602082840312156110ee57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561111d5761111d6110f5565b500390565b60008219821115611135576111356110f5565b50019056fea2646970667358221220eda69f609ed094f06f63cf305f3de6dd0992d7a657baaa5f098f443d6c90dbb264736f6c63430008090033";
var MockAaveLendingPool__factory = /** @class */ (function (_super) {
    __extends(MockAaveLendingPool__factory, _super);
    function MockAaveLendingPool__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    MockAaveLendingPool__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockAaveLendingPool__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockAaveLendingPool__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockAaveLendingPool__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockAaveLendingPool__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockAaveLendingPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockAaveLendingPool__factory.bytecode = _bytecode;
    MockAaveLendingPool__factory.abi = _abi;
    return MockAaveLendingPool__factory;
}(ethers_1.ContractFactory));
exports.MockAaveLendingPool__factory = MockAaveLendingPool__factory;
