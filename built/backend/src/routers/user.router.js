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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var express_1 = require("express");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var user_models_1 = require("../models/user.models");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var factureVente_model_1 = require("../models/factureVente.model");
var bonEntree_model_1 = require("../models/bonEntree.model");
var bonSortie_model_1 = require("../models/bonSortie.model");
var bonEntreeDetails_model_1 = require("../models/bonEntreeDetails.model");
var bonSortieDetails_model_1 = require("../models/bonSortieDetails.model");
var inventaireDetail_model_1 = require("../models/inventaireDetail.model");
var inventaire_model_1 = require("../models/inventaire.model");
var factureVenteDetails_model_1 = require("../models/factureVenteDetails.model");
var mouvementStock_model_1 = require("../models/mouvementStock.model");
var pointDeVente_model_1 = require("../models/pointDeVente.model");
var router = (0, express_1.Router)();
router.post("/register/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, phoneNumber, securityLevel, user, encryptedPassword, newUser, dbUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, password = _a.password, phoneNumber = _a.phoneNumber, securityLevel = _a.securityLevel;
                return [4 /*yield*/, user_models_1.UserModel.findOne({ name: name })];
            case 1:
                user = _b.sent();
                if (user) {
                    res.send("Ce nom est déjà utilisé!");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 2:
                encryptedPassword = _b.sent();
                newUser = {
                    name: name,
                    email: email.toLowerCase(),
                    password: encryptedPassword,
                    phoneNumber: phoneNumber,
                    securityLevel: securityLevel,
                };
                return [4 /*yield*/, user_models_1.UserModel.create(newUser)];
            case 3:
                dbUser = _b.sent();
                res.send(generateTokenResponse(dbUser));
                return [2 /*return*/];
        }
    });
}); }));
var generateTokenResponse = function (user) {
    var token = jsonwebtoken_1.default.sign({
        id: user.id, email: user.email, name: user.name, phoneNumber: user.phoneNumber, securityLevel: user.securityLevel
    }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        phoneNumber: user.phoneNumber,
        securityLevel: user.securityLevel,
        token: token
    };
};
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_models_1.UserModel.find()];
            case 1:
                users = _a.sent();
                res.send(users);
                return [2 /*return*/];
        }
    });
}); }));
router.post("/login", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, user, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, name = _a.name, password = _a.password;
                return [4 /*yield*/, user_models_1.UserModel.findOne({ name: name })];
            case 1:
                user = _c.sent();
                _b = user;
                if (!_b) return [3 /*break*/, 3];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 2:
                _b = (_c.sent());
                _c.label = 3;
            case 3:
                if (_b) {
                    res.send(generateTokenResponse(user));
                }
                else {
                    res.status(404).send("User name or password is not valid!");
                }
                return [2 /*return*/];
        }
    });
}); }));
router.put("/update/:id", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, _a, name, password, email, phoneNumber, securityLevel, userUpdates;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = req.params['id'];
                _a = req.body, name = _a.name, password = _a.password, email = _a.email, phoneNumber = _a.phoneNumber, securityLevel = _a.securityLevel;
                userUpdates = { name: name, password: password, email: email, phoneNumber: phoneNumber, securityLevel: securityLevel };
                return [4 /*yield*/, user_models_1.UserModel.updateOne({ id: userId }, userUpdates)];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); }));
router.get("/resetTable", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var factureVenteCount, factureVenteDetailsCount, bonEntreeCount, bonEntreeDetailsCount, bonSortiesCount, bonSortiesDetailsCount, inventaireDetailCount, inventaireCount, mouvementStockCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, factureVente_model_1.FactureVenteModel.countDocuments()];
            case 1:
                factureVenteCount = _a.sent();
                return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.countDocuments()];
            case 2:
                factureVenteDetailsCount = _a.sent();
                return [4 /*yield*/, bonEntree_model_1.BonEntreeModel.countDocuments()];
            case 3:
                bonEntreeCount = _a.sent();
                return [4 /*yield*/, bonEntreeDetails_model_1.BonEntreeDetailsModel.countDocuments()];
            case 4:
                bonEntreeDetailsCount = _a.sent();
                return [4 /*yield*/, bonSortie_model_1.BonSortiesModel.countDocuments()];
            case 5:
                bonSortiesCount = _a.sent();
                return [4 /*yield*/, bonSortieDetails_model_1.BonSortiesDetailsModel.countDocuments()];
            case 6:
                bonSortiesDetailsCount = _a.sent();
                return [4 /*yield*/, inventaireDetail_model_1.InventaireDetailModel.countDocuments()];
            case 7:
                inventaireDetailCount = _a.sent();
                return [4 /*yield*/, inventaire_model_1.InventaireModel.countDocuments()];
            case 8:
                inventaireCount = _a.sent();
                return [4 /*yield*/, mouvementStock_model_1.MouvementStockModel.countDocuments()];
            case 9:
                mouvementStockCount = _a.sent();
                if (!(factureVenteCount > 0 ||
                    factureVenteDetailsCount > 0 ||
                    bonEntreeCount > 0 ||
                    bonEntreeDetailsCount > 0 ||
                    bonSortiesCount > 0 ||
                    bonSortiesDetailsCount > 0 ||
                    inventaireDetailCount > 0 ||
                    inventaireCount > 0 ||
                    mouvementStockCount > 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, factureVente_model_1.FactureVenteModel.deleteMany({})];
            case 10:
                _a.sent();
                return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.deleteMany({})];
            case 11:
                _a.sent();
                return [4 /*yield*/, bonEntree_model_1.BonEntreeModel.deleteMany({})];
            case 12:
                _a.sent();
                return [4 /*yield*/, bonEntreeDetails_model_1.BonEntreeDetailsModel.deleteMany({})];
            case 13:
                _a.sent();
                return [4 /*yield*/, bonSortie_model_1.BonSortiesModel.deleteMany({})];
            case 14:
                _a.sent();
                return [4 /*yield*/, bonSortieDetails_model_1.BonSortiesDetailsModel.deleteMany({})];
            case 15:
                _a.sent();
                return [4 /*yield*/, inventaireDetail_model_1.InventaireDetailModel.deleteMany({})];
            case 16:
                _a.sent();
                return [4 /*yield*/, inventaire_model_1.InventaireModel.deleteMany({})];
            case 17:
                _a.sent();
                return [4 /*yield*/, mouvementStock_model_1.MouvementStockModel.deleteMany({})];
            case 18:
                _a.sent();
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({}, {
                        $set: {
                            numeroBE: 1,
                            numeroBS: 1,
                            numeroInventaire: 1,
                            numeroMouvementStock: 1,
                            numeroVente: 1
                        }
                    })];
            case 19:
                _a.sent();
                res.status(200).send("reset is done !");
                return [3 /*break*/, 21];
            case 20:
                res.send("No item to delete");
                _a.label = 21;
            case 21: return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
