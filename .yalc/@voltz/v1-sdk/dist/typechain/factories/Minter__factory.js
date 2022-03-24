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
exports.Minter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "VAMMAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061020a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631f2405b11461003b5780637b4f532714610050575b600080fd5b61004e61004936600461012e565b610063565b005b61004e61005e36600461012e565b6100ce565b604051631f2f089360e01b81526001600160a01b03861690631f2f0893906100959087908790879087906004016101a1565b600060405180830381600087803b1580156100af57600080fd5b505af11580156100c3573d6000803e3d6000fd5b505050505050505050565b604051635c6651a760e11b81526001600160a01b0386169063b8cca34e906100959087908790879087906004016101a1565b80356001600160a01b038116811461011757600080fd5b919050565b8035600281900b811461011757600080fd5b600080600080600060a08688031215610145578081fd5b61014e86610100565b945061015c60208701610100565b935061016a6040870161011c565b92506101786060870161011c565b915060808601356001600160801b0381168114610193578182fd5b809150509295509295909350565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b031660608201526080019056fea26469706673582212202c12f5e3bd017f226a59990767809aa3f685d39166d8f3a4701fb6f426f1ae9164736f6c63430008040033";
var Minter__factory = /** @class */ (function (_super) {
    __extends(Minter__factory, _super);
    function Minter__factory() {
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
    Minter__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Minter__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Minter__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Minter__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Minter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Minter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Minter__factory.bytecode = _bytecode;
    Minter__factory.abi = _abi;
    return Minter__factory;
}(ethers_1.ContractFactory));
exports.Minter__factory = Minter__factory;