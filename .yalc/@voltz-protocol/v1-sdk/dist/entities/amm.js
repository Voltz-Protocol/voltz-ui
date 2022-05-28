"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var constants_1 = require("../constants");
var typechain_1 = require("../typechain");
var tickMath_1 = require("../utils/tickMath");
var timestampWadToDateTime_1 = __importDefault(require("../utils/timestampWadToDateTime"));
var priceTickConversions_1 = require("../utils/priceTickConversions");
var nearestUsableTick_1 = require("../utils/nearestUsableTick");
var price_1 = require("./fractions/price");
var tokenAmount_1 = require("./fractions/tokenAmount");
var errorHandling_1 = require("../utils/errors/errorHandling");
var lodash_1 = require("lodash");
var AMM = /** @class */ (function () {
    function AMM(_a) {
        var id = _a.id, signer = _a.signer, provider = _a.provider, environment = _a.environment, marginEngineAddress = _a.marginEngineAddress, fcmAddress = _a.fcmAddress, rateOracle = _a.rateOracle, updatedTimestamp = _a.updatedTimestamp, termStartTimestamp = _a.termStartTimestamp, termEndTimestamp = _a.termEndTimestamp, underlyingToken = _a.underlyingToken, tick = _a.tick, tickSpacing = _a.tickSpacing, txCount = _a.txCount, totalNotionalTraded = _a.totalNotionalTraded, totalLiquidity = _a.totalLiquidity;
        this.id = id;
        this.signer = signer;
        this.provider = provider || (signer === null || signer === void 0 ? void 0 : signer.provider);
        this.environment = environment;
        this.marginEngineAddress = marginEngineAddress;
        this.fcmAddress = fcmAddress;
        this.rateOracle = rateOracle;
        this.updatedTimestamp = updatedTimestamp;
        this.termStartTimestamp = termStartTimestamp;
        this.termEndTimestamp = termEndTimestamp;
        this.underlyingToken = underlyingToken;
        this.tickSpacing = tickSpacing;
        this.tick = tick;
        this.txCount = txCount;
        this.totalNotionalTraded = totalNotionalTraded;
        this.totalLiquidity = totalLiquidity;
        this.overrides = {
            gasLimit: 10000000,
        };
    }
    // swap
    AMM.prototype.getInfoPostSwap = function (_a) {
        var isFT = _a.isFT, notional = _a.notional, fixedRateLimit = _a.fixedRateLimit, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tickUpper, tickLower, sqrtPriceLimitX96, tickLimit, scaledNotional, peripheryContract, swapPeripheryParams, tickBefore, tickAfter, marginRequirement, fee, availableNotional, fixedTokenDeltaUnbalanced, fixedRateBefore, fixedRateAfter, fixedRateDelta, fixedRateDeltaRaw, marginEngineContract, currentMargin, scaledCurrentMargin, scaledAvailableNotional, scaledFee, scaledMarginRequirement, additionalMargin, averageFixedRate;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _b.sent();
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            if (isFT) {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                            }
                            else {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                            }
                        }
                        scaledNotional = this.scale(notional);
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        swapPeripheryParams = {
                            marginEngine: this.marginEngineAddress,
                            isFT: isFT,
                            notional: scaledNotional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            marginDelta: '0',
                        };
                        return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                    case 2:
                        tickBefore = _b.sent();
                        tickAfter = 0;
                        marginRequirement = ethers_1.BigNumber.from(0);
                        fee = ethers_1.BigNumber.from(0);
                        availableNotional = ethers_1.BigNumber.from(0);
                        fixedTokenDeltaUnbalanced = ethers_1.BigNumber.from(0);
                        return [4 /*yield*/, peripheryContract.callStatic.swap(swapPeripheryParams).then(function (result) {
                                availableNotional = result[1];
                                fee = result[2];
                                fixedTokenDeltaUnbalanced = result[3];
                                marginRequirement = result[4];
                                tickAfter = parseInt(result[5]);
                            }, function (error) {
                                var result = (0, errorHandling_1.decodeInfoPostSwap)(error, _this.environment);
                                marginRequirement = result.marginRequirement;
                                tickAfter = result.tick;
                                fee = result.fee;
                                availableNotional = result.availableNotional;
                                fixedTokenDeltaUnbalanced = result.fixedTokenDeltaUnbalanced;
                            })];
                    case 3:
                        _b.sent();
                        fixedRateBefore = (0, priceTickConversions_1.tickToFixedRate)(tickBefore);
                        fixedRateAfter = (0, priceTickConversions_1.tickToFixedRate)(tickAfter);
                        fixedRateDelta = fixedRateAfter.subtract(fixedRateBefore);
                        fixedRateDeltaRaw = fixedRateDelta.toNumber();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, tickLower, tickUpper)];
                    case 4:
                        currentMargin = (_b.sent()).margin;
                        scaledCurrentMargin = this.descale(currentMargin);
                        scaledAvailableNotional = this.descale(availableNotional);
                        scaledFee = this.descale(fee);
                        scaledMarginRequirement = (this.descale(marginRequirement) + scaledFee) * 1.01;
                        additionalMargin = scaledMarginRequirement > scaledCurrentMargin
                            ? scaledMarginRequirement - scaledCurrentMargin
                            : 0;
                        averageFixedRate = fixedTokenDeltaUnbalanced.mul(ethers_1.BigNumber.from(1000)).div(availableNotional).toNumber() / 1000;
                        return [2 /*return*/, {
                                marginRequirement: additionalMargin,
                                availableNotional: scaledAvailableNotional < 0 ? -scaledAvailableNotional : scaledAvailableNotional,
                                fee: scaledFee < 0 ? -scaledFee : scaledFee,
                                slippage: fixedRateDeltaRaw < 0 ? -fixedRateDeltaRaw : fixedRateDeltaRaw,
                                averageFixedRate: averageFixedRate < 0 ? -averageFixedRate : averageFixedRate,
                            }];
                }
            });
        });
    };
    AMM.prototype.swap = function (_a) {
        var isFT = _a.isFT, notional = _a.notional, margin = _a.margin, fixedRateLimit = _a.fixedRateLimit, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, sqrtPriceLimitX96, tickLimit, peripheryContract, scaledNotional, scaledMarginDelta, isUnderlyingTokenApprovedForPeriphery, swapPeripheryParams, swapTransaction, receipt, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (margin < 0) {
                            throw new Error('Amount of margin cannot be negative');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying error');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            if (isFT) {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                            }
                            else {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                            }
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        scaledNotional = this.scale(notional);
                        scaledMarginDelta = this.scale(margin);
                        return [4 /*yield*/, this.isUnderlyingTokenApprovedForPeriphery()];
                    case 1:
                        isUnderlyingTokenApprovedForPeriphery = _b.sent();
                        if (!!isUnderlyingTokenApprovedForPeriphery) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.approveUnderlyingTokenForPeriphery()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        swapPeripheryParams = {
                            marginEngine: this.marginEngineAddress,
                            isFT: isFT,
                            notional: scaledNotional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            marginDelta: scaledMarginDelta,
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.swap(swapPeripheryParams).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                var errorMessage;
                                return __generator(this, function (_a) {
                                    errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, this.environment);
                                    throw new Error(errorMessage);
                                });
                            }); })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.swap(swapPeripheryParams, this.overrides).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 5:
                        swapTransaction = _b.sent();
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, swapTransaction.wait()];
                    case 7:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_1 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    // mint
    AMM.prototype.getInfoPostMint = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional;
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tickUpper, tickLower, peripheryContract, scaledNotional, mintOrBurnParams, marginRequirement, marginEngineContract, currentMargin, scaledCurrentMargin, scaledMarginRequirement;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _b.sent();
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        scaledNotional = this.scale(notional);
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: scaledNotional,
                            isMint: true,
                            marginDelta: '0',
                        };
                        marginRequirement = ethers_1.BigNumber.from('0');
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).then(function (result) {
                                marginRequirement = ethers_1.BigNumber.from(result);
                            }, function (error) {
                                var result = (0, errorHandling_1.decodeInfoPostMint)(error, _this.environment);
                                marginRequirement = result.marginRequirement;
                            })];
                    case 2:
                        _b.sent();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, tickLower, tickUpper)];
                    case 3:
                        currentMargin = (_b.sent()).margin;
                        scaledCurrentMargin = this.descale(currentMargin);
                        scaledMarginRequirement = this.descale(marginRequirement) * 1.01;
                        if (scaledMarginRequirement > scaledCurrentMargin) {
                            return [2 /*return*/, scaledMarginRequirement - scaledCurrentMargin];
                        }
                        else {
                            return [2 /*return*/, 0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.mint = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional, margin = _a.margin, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, peripheryContract, _notional, _marginDelta, isUnderlyingTokenApprovedForPeriphery, mintOrBurnParams, mintTransaction, receipt, error_2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (margin < 0) {
                            throw new Error('Amount of margin cannot be negative');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying error');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        _notional = this.scale(notional);
                        _marginDelta = this.scale(margin);
                        return [4 /*yield*/, this.isUnderlyingTokenApprovedForPeriphery()];
                    case 1:
                        isUnderlyingTokenApprovedForPeriphery = _b.sent();
                        if (!!isUnderlyingTokenApprovedForPeriphery) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.approveUnderlyingTokenForPeriphery()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: _notional,
                            isMint: true,
                            marginDelta: _marginDelta,
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.mintOrBurn(mintOrBurnParams, this.overrides).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 5:
                        mintTransaction = _b.sent();
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, mintTransaction.wait()];
                    case 7:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_2 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    // burn
    AMM.prototype.burn = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, peripheryContract, _notional, mintOrBurnParams, burnTransaction, receipt, error_3;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        _notional = this.scale(notional);
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: _notional,
                            isMint: false,
                            marginDelta: '0',
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.mintOrBurn(mintOrBurnParams, this.overrides).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 2:
                        burnTransaction = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, burnTransaction.wait()];
                    case 4:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_3 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // update position margin
    AMM.prototype.updatePositionMargin = function (_a) {
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, marginDelta = _a.marginDelta;
        return __awaiter(this, void 0, void 0, function () {
            var effectiveOwner, _b, tickUpper, tickLower, scaledMarginDelta, isUnderlyingTokenApprovedForPeriphery, peripheryContract, updatePositionMarginTransaction, receipt, error_4;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            return [2 /*return*/];
                        }
                        if (!(!owner)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = owner;
                        _c.label = 3;
                    case 3:
                        effectiveOwner = _b;
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (marginDelta === 0) {
                            throw new Error('No margin delta to update');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying error');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        scaledMarginDelta = this.scale(marginDelta);
                        return [4 /*yield*/, this.isUnderlyingTokenApprovedForPeriphery()];
                    case 4:
                        isUnderlyingTokenApprovedForPeriphery = _c.sent();
                        if (!!isUnderlyingTokenApprovedForPeriphery) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.approveUnderlyingTokenForPeriphery()];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        return [4 /*yield*/, peripheryContract.callStatic.updatePositionMargin(this.marginEngineAddress, tickLower, tickUpper, scaledMarginDelta, false).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                var errorMessage;
                                return __generator(this, function (_a) {
                                    errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, this.environment);
                                    throw new Error(errorMessage);
                                });
                            }); })];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, peripheryContract.updatePositionMargin(this.marginEngineAddress, tickLower, tickUpper, scaledMarginDelta, false, this.overrides)];
                    case 8:
                        updatePositionMarginTransaction = _c.sent();
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, updatePositionMarginTransaction.wait()];
                    case 10:
                        receipt = _c.sent();
                        return [2 /*return*/, receipt];
                    case 11:
                        error_4 = _c.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    // liquidation 
    AMM.prototype.liquidatePosition = function (_a) {
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, marginEngineContract, liquidatePositionTransaction, receipt, error_5;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.liquidatePosition(owner, tickLower, tickUpper).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 1:
                        _b.sent();
                        ;
                        return [4 /*yield*/, marginEngineContract.liquidatePosition(owner, tickLower, tickUpper, this.overrides)];
                    case 2:
                        liquidatePositionTransaction = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, liquidatePositionTransaction.wait()];
                    case 4:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_5 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // settlement
    AMM.prototype.settlePosition = function (_a) {
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var effectiveOwner, _b, tickUpper, tickLower, peripheryContract, settlePositionTransaction, receipt, error_6;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!(!owner)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = owner;
                        _c.label = 3;
                    case 3:
                        effectiveOwner = _b;
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        return [4 /*yield*/, peripheryContract.callStatic.settlePositionAndWithdrawMargin(this.marginEngineAddress, effectiveOwner, tickLower, tickUpper).catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, peripheryContract.settlePositionAndWithdrawMargin(this.marginEngineAddress, effectiveOwner, tickLower, tickUpper, this.overrides)];
                    case 5:
                        settlePositionTransaction = _c.sent();
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, settlePositionTransaction.wait()];
                    case 7:
                        receipt = _c.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_6 = _c.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    // FCM swap
    AMM.prototype.getInfoPostFCMSwap = function (_a) {
        var notional = _a.notional, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var sqrtPriceLimitX96, tickLimit, fcmContract, scaledNotional, peripheryContract, tickBefore, tickAfter, fee, availableNotional, fixedTokenDeltaUnbalanced, fixedRateBefore, fixedRateAfter, fixedRateDelta, fixedRateDeltaRaw, scaledAvailableNotional, scaledFee, averageFixedRate, additionalMargin, _b, cTokenAddress, cTokenContract, rate, scaledRate;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                        }
                        switch (this.rateOracle.protocolId) {
                            case 1: {
                                fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            }
                            case 2: {
                                fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            }
                            default:
                                throw new Error("Unrecognized FCM");
                        }
                        scaledNotional = this.scale(notional);
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                    case 1:
                        tickBefore = _c.sent();
                        tickAfter = 0;
                        fee = ethers_1.BigNumber.from(0);
                        availableNotional = ethers_1.BigNumber.from(0);
                        fixedTokenDeltaUnbalanced = ethers_1.BigNumber.from(0);
                        return [4 /*yield*/, fcmContract.callStatic.initiateFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            availableNotional = result[1];
                                            fee = result[2];
                                            fixedTokenDeltaUnbalanced = result[3];
                                            return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                                        case 1:
                                            tickAfter = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                var result = (0, errorHandling_1.decodeInfoPostSwap)(error, _this.environment);
                                tickAfter = result.tick;
                                fee = result.fee;
                                availableNotional = result.availableNotional;
                                fixedTokenDeltaUnbalanced = result.fixedTokenDeltaUnbalanced;
                            })];
                    case 2:
                        _c.sent();
                        fixedRateBefore = (0, priceTickConversions_1.tickToFixedRate)(tickBefore);
                        fixedRateAfter = (0, priceTickConversions_1.tickToFixedRate)(tickAfter);
                        fixedRateDelta = fixedRateAfter.subtract(fixedRateBefore);
                        fixedRateDeltaRaw = fixedRateDelta.toNumber();
                        scaledAvailableNotional = this.descale(availableNotional);
                        scaledFee = this.descale(fee);
                        averageFixedRate = fixedTokenDeltaUnbalanced.mul(ethers_1.BigNumber.from(1000)).div(availableNotional).toNumber() / 1000;
                        additionalMargin = 0;
                        _b = this.rateOracle.protocolId;
                        switch (_b) {
                            case 1: return [3 /*break*/, 3];
                            case 2: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 7];
                    case 3:
                        {
                            additionalMargin = scaledAvailableNotional;
                            return [3 /*break*/, 8];
                        }
                        _c.label = 4;
                    case 4: return [4 /*yield*/, fcmContract.cToken()];
                    case 5:
                        cTokenAddress = _c.sent();
                        cTokenContract = typechain_1.ICToken__factory.connect(cTokenAddress, this.signer);
                        return [4 /*yield*/, cTokenContract.callStatic.exchangeRateCurrent()];
                    case 6:
                        rate = _c.sent();
                        scaledRate = rate.div(ethers_1.BigNumber.from(1000000000000)).toNumber() / 1000000;
                        additionalMargin = scaledAvailableNotional / scaledRate;
                        return [3 /*break*/, 8];
                    case 7: throw new Error("Unrecognized FCM");
                    case 8: return [2 /*return*/, {
                            marginRequirement: additionalMargin,
                            availableNotional: scaledAvailableNotional < 0 ? -scaledAvailableNotional : scaledAvailableNotional,
                            fee: scaledFee < 0 ? -scaledFee : scaledFee,
                            slippage: fixedRateDeltaRaw < 0 ? -fixedRateDeltaRaw : fixedRateDeltaRaw,
                            averageFixedRate: averageFixedRate < 0 ? -averageFixedRate : averageFixedRate,
                        }];
                }
            });
        });
    };
    AMM.prototype.fcmSwap = function (_a) {
        var notional = _a.notional, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var isFCMApproved, sqrtPriceLimitX96, tickLimit, fcmContract, scaledNotional, isUnderlyingTokenApprovedForFCM, isYieldBearingTokenApprovedForFCM, fcmSwapTransaction, receipt, error_7;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying error');
                        }
                        return [4 /*yield*/, this.isFCMApproved()];
                    case 1:
                        isFCMApproved = _b.sent();
                        if (!!isFCMApproved) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.approveFCM()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                        }
                        switch (this.rateOracle.protocolId) {
                            case 1: {
                                fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            }
                            case 2: {
                                fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            }
                            default:
                                throw new Error("Unrecognized FCM");
                        }
                        scaledNotional = this.scale(notional);
                        return [4 /*yield*/, this.isUnderlyingTokenApprovedForFCM()];
                    case 4:
                        isUnderlyingTokenApprovedForFCM = _b.sent();
                        if (!!isUnderlyingTokenApprovedForFCM) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.approveUnderlyingTokenForFCM()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [4 /*yield*/, this.isYieldBearingTokenApprovedForFCM()];
                    case 7:
                        isYieldBearingTokenApprovedForFCM = _b.sent();
                        if (!!isYieldBearingTokenApprovedForFCM) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.approveUnderlyingTokenForFCM()];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [4 /*yield*/, fcmContract.callStatic.initiateFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96).catch(function (error) {
                            var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                            throw new Error(errorMessage);
                        })];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, fcmContract.initiateFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96, this.overrides)];
                    case 11:
                        fcmSwapTransaction = _b.sent();
                        _b.label = 12;
                    case 12:
                        _b.trys.push([12, 14, , 15]);
                        return [4 /*yield*/, fcmSwapTransaction.wait()];
                    case 13:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 14:
                        error_7 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    // FCM unwind
    AMM.prototype.getInfoPostFCMUnwind = function (_a) {
        var notionalToUnwind = _a.notionalToUnwind, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var sqrtPriceLimitX96, tickLimit, fcmContract, scaledNotional, peripheryContract, tickBefore, tickAfter, fee, availableNotional, fixedTokenDeltaUnbalanced, fixedRateBefore, fixedRateAfter, fixedRateDelta, fixedRateDeltaRaw, scaledAvailableNotional, scaledFee, averageFixedRate;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                        }
                        switch (this.rateOracle.protocolId) {
                            case 1:
                                fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            case 2:
                                fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            default:
                                throw new Error("Unrecognized FCM");
                        }
                        scaledNotional = this.scale(notionalToUnwind);
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                    case 1:
                        tickBefore = _b.sent();
                        tickAfter = 0;
                        fee = ethers_1.BigNumber.from(0);
                        availableNotional = ethers_1.BigNumber.from(0);
                        fixedTokenDeltaUnbalanced = ethers_1.BigNumber.from(0);
                        return [4 /*yield*/, fcmContract.callStatic.unwindFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            availableNotional = result[1];
                                            fee = result[2];
                                            fixedTokenDeltaUnbalanced = result[3];
                                            return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                                        case 1:
                                            tickAfter = _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                var result = (0, errorHandling_1.decodeInfoPostSwap)(error, _this.environment);
                                tickAfter = result.tick;
                                fee = result.fee;
                                availableNotional = result.availableNotional;
                                fixedTokenDeltaUnbalanced = result.fixedTokenDeltaUnbalanced;
                            })];
                    case 2:
                        _b.sent();
                        fixedRateBefore = (0, priceTickConversions_1.tickToFixedRate)(tickBefore);
                        fixedRateAfter = (0, priceTickConversions_1.tickToFixedRate)(tickAfter);
                        fixedRateDelta = fixedRateAfter.subtract(fixedRateBefore);
                        fixedRateDeltaRaw = fixedRateDelta.toNumber();
                        scaledAvailableNotional = this.descale(availableNotional);
                        scaledFee = this.descale(fee);
                        averageFixedRate = fixedTokenDeltaUnbalanced.mul(ethers_1.BigNumber.from(1000)).div(availableNotional).toNumber() / 1000;
                        return [2 /*return*/, {
                                marginRequirement: 0,
                                availableNotional: scaledAvailableNotional < 0 ? -scaledAvailableNotional : scaledAvailableNotional,
                                fee: scaledFee < 0 ? -scaledFee : scaledFee,
                                slippage: fixedRateDeltaRaw < 0 ? -fixedRateDeltaRaw : fixedRateDeltaRaw,
                                averageFixedRate: averageFixedRate < 0 ? -averageFixedRate : averageFixedRate,
                            }];
                }
            });
        });
    };
    AMM.prototype.fcmUnwind = function (_a) {
        var notionalToUnwind = _a.notionalToUnwind, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var sqrtPriceLimitX96, tickLimit, isFCMApproved, fcmContract, scaledNotional, isUnderlyingTokenApprovedForFCM, fcmUnwindTransaction, receipt, error_8;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying error');
                        }
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                        }
                        return [4 /*yield*/, this.isFCMApproved()];
                    case 1:
                        isFCMApproved = _b.sent();
                        if (!!isFCMApproved) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.approveFCM()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        switch (this.rateOracle.protocolId) {
                            case 1:
                                fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            case 2:
                                fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            default:
                                throw new Error("Unrecognized FCM");
                        }
                        scaledNotional = this.scale(notionalToUnwind);
                        return [4 /*yield*/, this.isUnderlyingTokenApprovedForFCM()];
                    case 4:
                        isUnderlyingTokenApprovedForFCM = _b.sent();
                        if (!!isUnderlyingTokenApprovedForFCM) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.approveUnderlyingTokenForFCM()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [4 /*yield*/, fcmContract.callStatic.unwindFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96).catch(function (error) {
                            var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                            throw new Error(errorMessage);
                        })];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, fcmContract.unwindFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96, this.overrides)];
                    case 8:
                        fcmUnwindTransaction = _b.sent();
                        _b.label = 9;
                    case 9:
                        _b.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, fcmUnwindTransaction.wait()];
                    case 10:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 11:
                        error_8 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    // FCM settlement
    AMM.prototype.settleFCMTrader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fcmContract, fcmSettleTraderTransaction, receipt, error_9;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        switch (this.rateOracle.protocolId) {
                            case 1:
                                fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            case 2:
                                fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                                break;
                            default:
                                throw new Error("Unrecognized FCM");
                        }
                        return [4 /*yield*/, fcmContract.callStatic.settleTrader().catch(function (error) {
                                var errorMessage = (0, errorHandling_1.getReadableErrorMessage)(error, _this.environment);
                                throw new Error(errorMessage);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fcmContract.settleTrader(this.overrides)];
                    case 2:
                        fcmSettleTraderTransaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, fcmSettleTraderTransaction.wait()];
                    case 4:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_9 = _a.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // scale/descale according to underlying token
    AMM.prototype.scale = function (value) {
        var price = price_1.Price.fromNumber(value);
        var tokenAmount = tokenAmount_1.TokenAmount.fromFractionalAmount(this.underlyingToken, price.numerator, price.denominator);
        var scaledValue = tokenAmount.scale();
        return scaledValue;
    };
    AMM.prototype.descale = function (value) {
        if (this.underlyingToken.decimals <= 3) {
            return value.toNumber() / (Math.pow(10, this.underlyingToken.decimals));
        }
        else {
            return value.div(ethers_1.BigNumber.from(10).pow(this.underlyingToken.decimals - 3)).toNumber() / 1000;
        }
    };
    // fcm approval
    AMM.prototype.isFCMApproved = function () {
        return __awaiter(this, void 0, void 0, function () {
            var factoryContract, signerAddress, isApproved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        factoryContract = typechain_1.Factory__factory.connect(constants_1.FACTORY_ADDRESS, this.signer);
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        return [4 /*yield*/, factoryContract.isApproved(signerAddress, this.fcmAddress)];
                    case 2:
                        isApproved = _a.sent();
                        return [2 /*return*/, isApproved];
                }
            });
        });
    };
    AMM.prototype.approveFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isApproved, factoryContract, approvalTransaction, receipt, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isFCMApproved()];
                    case 1:
                        isApproved = _a.sent();
                        if (isApproved) {
                            return [2 /*return*/];
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        factoryContract = typechain_1.Factory__factory.connect(constants_1.FACTORY_ADDRESS, this.signer);
                        return [4 /*yield*/, factoryContract.setApproval(this.fcmAddress, true, this.overrides)];
                    case 2:
                        approvalTransaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 4:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_10 = _a.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // underlying token approval for periphery
    AMM.prototype.isUnderlyingTokenApprovedForPeriphery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tokenAddress, token, allowance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.underlyingToken.id) {
                            throw new Error("No underlying token");
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        tokenAddress = this.underlyingToken.id;
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.allowance(signerAddress, constants_1.PERIPHERY_ADDRESS, this.overrides)];
                    case 2:
                        allowance = _a.sent();
                        return [2 /*return*/, allowance.gte(constants_1.TresholdApprovalBn)];
                }
            });
        });
    };
    AMM.prototype.approveUnderlyingTokenForPeriphery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isApproved, tokenAddress, token, approvalTransaction, receipt, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isUnderlyingTokenApprovedForPeriphery()];
                    case 1:
                        isApproved = _a.sent();
                        if (isApproved) {
                            return [2 /*return*/];
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error("No underlying token");
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tokenAddress = this.underlyingToken.id;
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.approve(constants_1.PERIPHERY_ADDRESS, constants_1.MaxUint256Bn, this.overrides)];
                    case 2:
                        approvalTransaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 4:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_11 = _a.sent();
                        throw new Error("Token approval failed");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // underlying token approval for fcm
    AMM.prototype.isUnderlyingTokenApprovedForFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tokenAddress, token, allowance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.underlyingToken.id) {
                            throw new Error("No underlying token");
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        tokenAddress = this.underlyingToken.id;
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.allowance(signerAddress, this.fcmAddress, this.overrides)];
                    case 2:
                        allowance = _a.sent();
                        return [2 /*return*/, allowance.gte(constants_1.TresholdApprovalBn)];
                }
            });
        });
    };
    AMM.prototype.approveUnderlyingTokenForFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isApproved, tokenAddress, token, approvalTransaction, receipt, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isUnderlyingTokenApprovedForFCM()];
                    case 1:
                        isApproved = _a.sent();
                        if (isApproved) {
                            return [2 /*return*/];
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error("No underlying token");
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tokenAddress = this.underlyingToken.id;
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.approve(this.fcmAddress, constants_1.MaxUint256Bn, this.overrides)];
                    case 2:
                        approvalTransaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 4:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_12 = _a.sent();
                        throw new Error("Token approval failed");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // yield bearing token approval for fcm
    AMM.prototype.isYieldBearingTokenApprovedForFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress, _a, fcmContract, fcmContract, signerAddress, token, allowance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        _a = this.rateOracle.protocolId;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.underlyingYieldBearingToken()];
                    case 2:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.cToken()];
                    case 4:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 6];
                    case 5: throw new Error("Unrecognized FCM");
                    case 6: return [4 /*yield*/, this.signer.getAddress()];
                    case 7:
                        signerAddress = _b.sent();
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.allowance(signerAddress, this.fcmAddress, this.overrides)];
                    case 8:
                        allowance = _b.sent();
                        return [2 /*return*/, allowance.gte(constants_1.TresholdApprovalBn)];
                }
            });
        });
    };
    Object.defineProperty(AMM.prototype, "protocol", {
        // protocol name
        get: function () {
            var firstProtocolCharacter = this.rateOracle.protocol[0];
            var tokenName = this.underlyingToken.name;
            return "".concat(firstProtocolCharacter.toLowerCase()).concat(tokenName);
        },
        enumerable: false,
        configurable: true
    });
    AMM.prototype.approveYieldBearingTokenForFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isApproved, tokenAddress, _a, fcmContract, fcmContract, token, approvalTransaction, receipt, error_13;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.isYieldBearingTokenApprovedForFCM()];
                    case 1:
                        isApproved = _b.sent();
                        if (isApproved) {
                            return [2 /*return*/];
                        }
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        _a = this.rateOracle.protocolId;
                        switch (_a) {
                            case 1: return [3 /*break*/, 2];
                            case 2: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.underlyingYieldBearingToken()];
                    case 3:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.cToken()];
                    case 5:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 7];
                    case 6: throw new Error("Unrecognized FCM");
                    case 7:
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.approve(this.fcmAddress, constants_1.MaxUint256Bn, this.overrides)];
                    case 8:
                        approvalTransaction = _b.sent();
                        _b.label = 9;
                    case 9:
                        _b.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 10:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 11:
                        error_13 = _b.sent();
                        throw new Error("Token approval failed");
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AMM.prototype, "startDateTime", {
        // start and end dates
        get: function () {
            return (0, timestampWadToDateTime_1.default)(this.termStartTimestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "endDateTime", {
        get: function () {
            return (0, timestampWadToDateTime_1.default)(this.termEndTimestamp);
        },
        enumerable: false,
        configurable: true
    });
    // get position information
    AMM.prototype.getFixedApr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, currentTick, apr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.provider);
                        return [4 /*yield*/, peripheryContract.callStatic.getCurrentTick(this.marginEngineAddress)];
                    case 1:
                        currentTick = _a.sent();
                        apr = (0, priceTickConversions_1.tickToFixedRate)(currentTick).toNumber();
                        return [2 /*return*/, apr];
                }
            });
        });
    };
    AMM.prototype.getVariableApy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var marginEngineContract, historicalApy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.provider);
                        return [4 /*yield*/, marginEngineContract.callStatic.getHistoricalApy()];
                    case 1:
                        historicalApy = _a.sent();
                        return [2 /*return*/, parseFloat(ethers_1.utils.formatEther(historicalApy))];
                }
            });
        });
    };
    AMM.prototype.getAllSwaps = function (position) {
        var allSwaps = [];
        for (var _i = 0, _a = position.swaps; _i < _a.length; _i++) {
            var s = _a[_i];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        for (var _b = 0, _c = position.fcmSwaps; _b < _c.length; _b++) {
            var s = _c[_b];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        for (var _d = 0, _e = position.fcmUnwinds; _d < _e.length; _d++) {
            var s = _e[_d];
            allSwaps.push({
                fDelta: ethers_1.BigNumber.from(s.fixedTokenDeltaUnbalanced.toString()),
                vDelta: ethers_1.BigNumber.from(s.variableTokenDelta.toString()),
                timestamp: ethers_1.BigNumber.from(s.transactionTimestamp.toString())
            });
        }
        allSwaps.sort(function (a, b) { return a.timestamp.sub(b.timestamp).toNumber(); });
        return allSwaps;
    };
    AMM.prototype.getAccruedCashflow = function (allSwaps, atMaturity) {
        return __awaiter(this, void 0, void 0, function () {
            var accruedCashflow, lenSwaps, untilTimestamp, rateOracleContract, excludeLast, i, currentSwapTimestamp, normalizedTime, variableFactorBetweenSwaps, fixedCashflow, variableCashflow, cashflow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        accruedCashflow = ethers_1.BigNumber.from(0);
                        lenSwaps = allSwaps.length;
                        untilTimestamp = (atMaturity)
                            ? ethers_1.BigNumber.from(this.termEndTimestamp.toString())
                            : allSwaps[lenSwaps - 1].timestamp.mul(ethers_1.BigNumber.from(10).pow(18));
                        rateOracleContract = typechain_1.BaseRateOracle__factory.connect(this.rateOracle.id, this.signer);
                        excludeLast = (atMaturity) ? 0 : 1;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i + excludeLast < lenSwaps)) return [3 /*break*/, 4];
                        currentSwapTimestamp = allSwaps[i].timestamp.mul(ethers_1.BigNumber.from(10).pow(18));
                        normalizedTime = (untilTimestamp.sub(currentSwapTimestamp)).div(ethers_1.BigNumber.from(constants_1.ONE_YEAR_IN_SECONDS));
                        return [4 /*yield*/, rateOracleContract.callStatic.variableFactor(currentSwapTimestamp, untilTimestamp)];
                    case 2:
                        variableFactorBetweenSwaps = _a.sent();
                        fixedCashflow = allSwaps[i].fDelta.mul(normalizedTime).div(ethers_1.BigNumber.from(100)).div(ethers_1.BigNumber.from(10).pow(18));
                        variableCashflow = allSwaps[i].vDelta.mul(variableFactorBetweenSwaps).div(ethers_1.BigNumber.from(10).pow(18));
                        cashflow = fixedCashflow.add(variableCashflow);
                        accruedCashflow = accruedCashflow.add(cashflow);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, this.descale(accruedCashflow)];
                }
            });
        });
    };
    AMM.prototype.getVariableFactor = function (termStartTimestamp, termEndTimestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var rateOracleContract, result, resultScaled, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        rateOracleContract = typechain_1.BaseRateOracle__factory.connect(this.rateOracle.id, this.provider);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, rateOracleContract.callStatic.variableFactor(termStartTimestamp, termEndTimestamp)];
                    case 2:
                        result = _a.sent();
                        resultScaled = result.div(ethers_1.BigNumber.from(10).pow(12)).toNumber() / 1000000;
                        return [2 /*return*/, resultScaled];
                    case 3:
                        error_14 = _a.sent();
                        throw new Error("Cannot get variable factor");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.getPositionInformation = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var results, signerAddress, lastBlock, lastBlockTimestamp, _a, _b, beforeMaturity, _c, allSwaps, lenSwaps, rateOracleContract, lastSwapTimestamp, variableApySinceLastSwap, _d, _e, _f, fcmContract, margin, fcmContract, margin, tickLower, tickUpper, marginEngineContract, rawPositionInfo, liquidationThreshold, _1, safetyThreshold, _2;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        results = {
                            margin: 0,
                            accruedCashflow: 0,
                            beforeMaturity: false
                        };
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _g.sent();
                        return [4 /*yield*/, this.provider.getBlockNumber()];
                    case 2:
                        lastBlock = _g.sent();
                        _b = (_a = ethers_1.BigNumber).from;
                        return [4 /*yield*/, this.provider.getBlock(lastBlock - 4)];
                    case 3:
                        lastBlockTimestamp = _b.apply(_a, [(_g.sent()).timestamp]);
                        beforeMaturity = (lastBlockTimestamp.mul(ethers_1.BigNumber.from(10).pow(18))).lt(ethers_1.BigNumber.from(this.termEndTimestamp.toString()));
                        results.beforeMaturity = beforeMaturity;
                        if (!beforeMaturity) return [3 /*break*/, 5];
                        _c = results;
                        return [4 /*yield*/, this.getFixedApr()];
                    case 4:
                        _c.fixedApr = _g.sent();
                        _g.label = 5;
                    case 5:
                        allSwaps = this.getAllSwaps(position);
                        lenSwaps = allSwaps.length;
                        if (!(lenSwaps > 0)) return [3 /*break*/, 11];
                        if (!beforeMaturity) return [3 /*break*/, 9];
                        if (!(lenSwaps > 0)) return [3 /*break*/, 8];
                        rateOracleContract = typechain_1.BaseRateOracle__factory.connect(this.rateOracle.id, this.signer);
                        lastSwapTimestamp = allSwaps[lenSwaps - 1].timestamp;
                        return [4 /*yield*/, rateOracleContract.callStatic.getApyFromTo(lastSwapTimestamp, lastBlockTimestamp)];
                    case 6:
                        variableApySinceLastSwap = _g.sent();
                        results.variableRateSinceLastSwap = variableApySinceLastSwap.div(ethers_1.BigNumber.from(10).pow(12)).toNumber() / 10000;
                        results.fixedRateSinceLastSwap = position.averageFixedRate;
                        _d = results;
                        return [4 /*yield*/, this.getAccruedCashflow(allSwaps, false)];
                    case 7:
                        _d.accruedCashflow = _g.sent();
                        _g.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        if (!!position.isSettled) return [3 /*break*/, 11];
                        _e = results;
                        return [4 /*yield*/, this.getAccruedCashflow(allSwaps, true)];
                    case 10:
                        _e.accruedCashflow = _g.sent();
                        _g.label = 11;
                    case 11:
                        if (!position.source.includes("FCM")) return [3 /*break*/, 18];
                        _f = this.rateOracle.protocolId;
                        switch (_f) {
                            case 1: return [3 /*break*/, 12];
                            case 2: return [3 /*break*/, 14];
                        }
                        return [3 /*break*/, 16];
                    case 12:
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.getTraderMarginInATokens(signerAddress)];
                    case 13:
                        margin = (_g.sent());
                        results.margin = this.descale(margin);
                        return [3 /*break*/, 17];
                    case 14:
                        fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.getTraderMarginInCTokens(signerAddress)];
                    case 15:
                        margin = (_g.sent());
                        results.margin = this.descale(margin);
                        return [3 /*break*/, 17];
                    case 16: throw new Error("Unrecognized FCM");
                    case 17:
                        if (beforeMaturity) {
                            results.healthFactor = 3;
                        }
                        return [3 /*break*/, 27];
                    case 18:
                        tickLower = position.tickLower;
                        tickUpper = position.tickUpper;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, tickLower, tickUpper)];
                    case 19:
                        rawPositionInfo = _g.sent();
                        results.margin = this.descale(rawPositionInfo.margin);
                        results.fees = this.descale(rawPositionInfo.accumulatedFees);
                        if (!beforeMaturity) return [3 /*break*/, 27];
                        _g.label = 20;
                    case 20:
                        _g.trys.push([20, 22, , 23]);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPositionMarginRequirement(signerAddress, tickLower, tickUpper, true)];
                    case 21:
                        liquidationThreshold = _g.sent();
                        results.liquidationThreshold = this.descale(liquidationThreshold);
                        return [3 /*break*/, 23];
                    case 22:
                        _1 = _g.sent();
                        return [3 /*break*/, 23];
                    case 23:
                        _g.trys.push([23, 25, , 26]);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPositionMarginRequirement(signerAddress, tickLower, tickUpper, false)];
                    case 24:
                        safetyThreshold = _g.sent();
                        results.safetyThreshold = this.descale(safetyThreshold);
                        return [3 /*break*/, 26];
                    case 25:
                        _2 = _g.sent();
                        return [3 /*break*/, 26];
                    case 26:
                        if (!(0, lodash_1.isUndefined)(results.liquidationThreshold) && !(0, lodash_1.isUndefined)(results.safetyThreshold)) {
                            results.healthFactor = (results.margin < results.liquidationThreshold) ? 1 : (results.margin < results.safetyThreshold ? 2 : 3);
                        }
                        _g.label = 27;
                    case 27: return [2 /*return*/, results];
                }
            });
        });
    };
    // tick functionalities
    AMM.prototype.closestTickAndFixedRate = function (fixedRate) {
        if (fixedRate < constants_1.MIN_FIXED_RATE) {
            fixedRate = constants_1.MIN_FIXED_RATE;
        }
        if (fixedRate > constants_1.MAX_FIXED_RATE) {
            fixedRate = constants_1.MAX_FIXED_RATE;
        }
        var fixedRatePrice = price_1.Price.fromNumber(fixedRate);
        var closestTick = (0, priceTickConversions_1.fixedRateToClosestTick)(fixedRatePrice);
        var closestUsableTick = (0, nearestUsableTick_1.nearestUsableTick)(closestTick, this.tickSpacing);
        var closestUsableFixedRate = (0, priceTickConversions_1.tickToFixedRate)(closestUsableTick);
        return {
            closestUsableTick: closestUsableTick,
            closestUsableFixedRate: closestUsableFixedRate,
        };
    };
    AMM.prototype.getNextUsableFixedRate = function (fixedRate, count) {
        var closestUsableTick = this.closestTickAndFixedRate(fixedRate).closestUsableTick;
        closestUsableTick -= count * this.tickSpacing;
        return (0, priceTickConversions_1.tickToFixedRate)(closestUsableTick).toNumber();
    };
    // balance checks
    AMM.prototype.hasEnoughUnderlyingTokens = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tokenAddress, token, currentBalance, scaledAmount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error("No underlying token");
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        tokenAddress = this.underlyingToken.id;
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.balanceOf(signerAddress)];
                    case 2:
                        currentBalance = _a.sent();
                        scaledAmount = ethers_1.BigNumber.from(this.scale(amount));
                        return [2 /*return*/, currentBalance.gte(scaledAmount)];
                }
            });
        });
    };
    AMM.prototype.hasEnoughYieldBearingTokens = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tokenAddress, _a, fcmContract, fcmContract, token, currentBalance, scaledAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _b.sent();
                        _a = this.rateOracle.protocolId;
                        switch (_a) {
                            case 1: return [3 /*break*/, 2];
                            case 2: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.underlyingYieldBearingToken()];
                    case 3:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        fcmContract = typechain_1.CompoundFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.cToken()];
                    case 5:
                        tokenAddress = _b.sent();
                        return [3 /*break*/, 7];
                    case 6: throw new Error("Unrecognized FCM");
                    case 7:
                        token = typechain_1.ERC20Mock__factory.connect(tokenAddress, this.signer);
                        return [4 /*yield*/, token.balanceOf(signerAddress)];
                    case 8:
                        currentBalance = _b.sent();
                        scaledAmount = ethers_1.BigNumber.from(this.scale(amount));
                        return [2 /*return*/, currentBalance.gte(scaledAmount)];
                }
            });
        });
    };
    // get cap
    AMM.prototype.setCap = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, marginEngineContract, vammAddress, vammContract, isAlphaTransaction, error_15, isAlphaTransactionME, error_16, setCapTransaction, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.vamm()];
                    case 1:
                        vammAddress = _a.sent();
                        vammContract = typechain_1.VAMM__factory.connect(vammAddress, this.signer);
                        return [4 /*yield*/, vammContract.setIsAlpha(true)];
                    case 2:
                        isAlphaTransaction = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, isAlphaTransaction.wait()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_15 = _a.sent();
                        throw new Error("Setting Alpha failed");
                    case 6: return [4 /*yield*/, marginEngineContract.setIsAlpha(true)];
                    case 7:
                        isAlphaTransactionME = _a.sent();
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, isAlphaTransactionME.wait()];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        error_16 = _a.sent();
                        throw new Error("Setting Alpha failed");
                    case 11: return [4 /*yield*/, peripheryContract.setLPMarginCap(vammAddress, this.scale(amount))];
                    case 12:
                        setCapTransaction = _a.sent();
                        _a.label = 13;
                    case 13:
                        _a.trys.push([13, 15, , 16]);
                        return [4 /*yield*/, setCapTransaction.wait()];
                    case 14:
                        _a.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        error_17 = _a.sent();
                        throw new Error("Setting cap failed");
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.getCaps = function () {
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, marginEngineContract, vammAddress, accumulated, cap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.provider);
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.provider);
                        return [4 /*yield*/, marginEngineContract.vamm()];
                    case 1:
                        vammAddress = _a.sent();
                        return [4 /*yield*/, peripheryContract.lpMarginCumulatives(vammAddress)];
                    case 2:
                        accumulated = _a.sent();
                        return [4 /*yield*/, peripheryContract.lpMarginCaps(vammAddress)];
                    case 3:
                        cap = _a.sent();
                        return [2 /*return*/, {
                                accumulated: this.descale(accumulated),
                                cap: this.descale(cap)
                            }];
                }
            });
        });
    };
    AMM.prototype.getPositionMarginRequirement = function (fixedLow, fixedHigh) {
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, marginEngineContract, signerAddress, requirement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        return [4 /*yield*/, marginEngineContract.callStatic.getPositionMarginRequirement(signerAddress, tickLower, tickUpper, false)];
                    case 2:
                        requirement = _a.sent();
                        return [2 /*return*/, this.descale(requirement)];
                }
            });
        });
    };
    AMM.prototype.getOneWeekApy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastBlock, lastBlockTimestamp, _a, _b, rateOracleContract, oneWeekApy;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        return [4 /*yield*/, this.provider.getBlockNumber()];
                    case 1:
                        lastBlock = _c.sent();
                        _b = (_a = ethers_1.BigNumber).from;
                        return [4 /*yield*/, this.provider.getBlock(lastBlock - 4)];
                    case 2:
                        lastBlockTimestamp = _b.apply(_a, [(_c.sent()).timestamp]);
                        rateOracleContract = typechain_1.BaseRateOracle__factory.connect(this.rateOracle.id, this.provider);
                        return [4 /*yield*/, rateOracleContract.callStatic.getApyFromTo(lastBlockTimestamp.sub(ethers_1.BigNumber.from(604800)), lastBlockTimestamp)];
                    case 3:
                        oneWeekApy = _c.sent();
                        return [2 /*return*/, oneWeekApy.div(ethers_1.BigNumber.from(1000000000000)).toNumber() / 10000];
                }
            });
        });
    };
    return AMM;
}());
exports.default = AMM;
