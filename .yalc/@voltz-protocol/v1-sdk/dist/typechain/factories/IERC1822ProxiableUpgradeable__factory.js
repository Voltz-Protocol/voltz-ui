"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC1822ProxiableUpgradeable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var IERC1822ProxiableUpgradeable__factory = /** @class */ (function () {
    function IERC1822ProxiableUpgradeable__factory() {
    }
    IERC1822ProxiableUpgradeable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC1822ProxiableUpgradeable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC1822ProxiableUpgradeable__factory.abi = _abi;
    return IERC1822ProxiableUpgradeable__factory;
}());
exports.IERC1822ProxiableUpgradeable__factory = IERC1822ProxiableUpgradeable__factory;
