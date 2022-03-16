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
exports.LiquidityMathTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "addDelta",
        outputs: [
            {
                internalType: "uint128",
                name: "z",
                type: "uint128",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "x",
                type: "uint128",
            },
            {
                internalType: "int128",
                name: "y",
                type: "int128",
            },
        ],
        name: "getGasCostOfAddDelta",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b506102af806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063402d44fb1461003b578063cf41632f1461006b575b600080fd5b61004e61004936600461018a565b61008c565b6040516001600160801b0390911681526020015b60405180910390f35b61007e61007936600461018a565b6100a1565b604051908152602001610062565b600061009883836100c5565b90505b92915050565b6000805a90506100b184846100c5565b505a6100bd9082610226565b949350505050565b60008082600f0b1215610137576001600160801b0383166100e58361023d565b6100ef90856101fe565b9150816001600160801b0316106101325760405162461bcd60e51b81526020600482015260026024820152614c5360f01b60448201526064015b60405180910390fd5b61009b565b6001600160801b03831661014b83856101d3565b9150816001600160801b0316101561009b5760405162461bcd60e51b81526020600482015260026024820152614c4160f01b6044820152606401610129565b6000806040838503121561019c578182fd5b82356001600160801b03811681146101b2578283fd5b91506020830135600f81900b81146101c8578182fd5b809150509250929050565b60006001600160801b038281168482168083038211156101f5576101f5610263565b01949350505050565b60006001600160801b038381169083168181101561021e5761021e610263565b039392505050565b60008282101561023857610238610263565b500390565b6000600f82900b60016001607f1b031981141561025c5761025c610263565b9003919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f0622df3e610e72cfc749fb98dcf3f3b92411a6538ae27193c4fc3c77dc74e9c64736f6c63430008040033";
var LiquidityMathTest__factory = /** @class */ (function (_super) {
    __extends(LiquidityMathTest__factory, _super);
    function LiquidityMathTest__factory() {
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
    LiquidityMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LiquidityMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LiquidityMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LiquidityMathTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LiquidityMathTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LiquidityMathTest__factory.bytecode = _bytecode;
    LiquidityMathTest__factory.abi = _abi;
    return LiquidityMathTest__factory;
}(ethers_1.ContractFactory));
exports.LiquidityMathTest__factory = LiquidityMathTest__factory;
