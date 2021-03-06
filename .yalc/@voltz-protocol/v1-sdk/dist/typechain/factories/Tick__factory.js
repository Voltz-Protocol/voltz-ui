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
exports.Tick__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "MAXIMUM_TICK_SPACING",
        outputs: [
            {
                internalType: "int24",
                name: "",
                type: "int24",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608d610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063142cf488146038575b600080fd5b604061400081565b60405160029190910b815260200160405180910390f3fea2646970667358221220f750dc763f3ce39286a6d56b7c47f4813d13141003fb950f23d9977acc50189564736f6c63430008090033";
var Tick__factory = /** @class */ (function (_super) {
    __extends(Tick__factory, _super);
    function Tick__factory() {
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
    Tick__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Tick__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Tick__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Tick__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Tick__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Tick__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Tick__factory.bytecode = _bytecode;
    Tick__factory.abi = _abi;
    return Tick__factory;
}(ethers_1.ContractFactory));
exports.Tick__factory = Tick__factory;
