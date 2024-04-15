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
var factureVenteDetails_model_1 = require("../models/factureVenteDetails.model");
var pointDeVente_model_1 = require("../models/pointDeVente.model");
var article_models_1 = require("../models/article.models");
var router = (0, express_1.Router)();
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var factureVentes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.find()];
            case 1:
                factureVentes = _a.sent();
                res.send(factureVentes);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/search/:searchTerm", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, factureVentes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params['searchTerm'], 'i');
                return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.find({ designation: { $regex: searchRegex } })];
            case 1:
                factureVentes = _a.sent();
                res.send(factureVentes);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:numeroDocument", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var numeroDoc, factureVenteDetails;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                numeroDoc = req.params['numeroDocument'];
                return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.find({ factureVenteNumDoc: numeroDoc }).populate('article')];
            case 1:
                factureVenteDetails = _a.sent();
                res.send(factureVenteDetails);
                return [2 /*return*/];
        }
    });
}); }));
router.post("/create", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, cartItem, prixVenteTTC, remise, montantNetTTC, factureVenteNumDoc, pV, numeroVente, newFactureVenteDetails, newQteStock;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, cartItem = _a.cartItem, prixVenteTTC = _a.prixVenteTTC, remise = _a.remise, montantNetTTC = _a.montantNetTTC, factureVenteNumDoc = _a.factureVenteNumDoc;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                pV = _b.sent();
                if (!pV) return [3 /*break*/, 3];
                numeroVente = pV.numeroVente + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroVente: numeroVente } })];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                newFactureVenteDetails = {
                    pointDeVente: pV === null || pV === void 0 ? void 0 : pV.id,
                    article: cartItem.article._id,
                    quantite: cartItem.quantity,
                    prixVenteTTC: prixVenteTTC,
                    remise: remise,
                    montantNetTTC: montantNetTTC,
                    factureVenteNumDoc: factureVenteNumDoc
                };
                return [4 /*yield*/, factureVenteDetails_model_1.FactureVenteDetailsModel.create(newFactureVenteDetails)];
            case 4:
                _b.sent();
                newQteStock = cartItem.article.qteEnStock - newFactureVenteDetails.quantite;
                return [4 /*yield*/, article_models_1.ArticleModel.updateOne({ _id: cartItem.article._id }, { $set: { qteEnStock: newQteStock } })];
            case 5:
                _b.sent();
                res.send(newFactureVenteDetails);
                return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
