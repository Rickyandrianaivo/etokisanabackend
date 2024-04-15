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
var inventaire_model_1 = require("../models/inventaire.model");
var inventaireDetail_model_1 = require("../models/inventaireDetail.model");
var Inventaire_data_1 = require("../Inventaire_data");
var pointDeVente_model_1 = require("../models/pointDeVente.model");
var article_models_1 = require("../models/article.models");
var router = (0, express_1.Router)();
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res).send;
                return [4 /*yield*/, inventaire_model_1.InventaireModel.find()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:dateDu/:dateAu", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dateDu, dateAu, precInv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dateDu = req.params['dateDu'];
                dateAu = req.params['dateAu'];
                if (!(dateDu && dateAu)) return [3 /*break*/, 2];
                return [4 /*yield*/, inventaire_model_1.InventaireModel.find({ date: { $gte: dateDu, $lte: dateAu } })];
            case 1:
                precInv = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, inventaire_model_1.InventaireModel.find()];
            case 3:
                precInv = _a.sent();
                _a.label = 4;
            case 4:
                res.send(precInv);
                return [2 /*return*/];
        }
    });
}); }));
router.get("/:numeroDocument", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var numeroDocument, inventaireDetails;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                numeroDocument = req.params['numeroDocument'];
                return [4 /*yield*/, inventaireDetail_model_1.InventaireDetailModel.find({ inventaireNumDoc: numeroDocument }).populate("article")];
            case 1:
                inventaireDetails = (_a = _b.sent()) !== null && _a !== void 0 ? _a : new inventaire_model_1.InventaireModel();
                res.send(inventaireDetails);
                4;
                return [2 /*return*/];
        }
    });
}); }));
router.get("/seed", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pV, newInventaire, newNumInv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                pV = _a.sent();
                if (!pV) return [3 /*break*/, 4];
                newInventaire = {
                    numeroDocument: pV.prefixeInventaire + "000" + pV.numeroInventaire,
                    date: new Date(),
                    typeDocument: "Inventaire",
                    codeSociete: pV.codeSociete,
                    depot: pV.nomPV,
                    valide: true,
                };
                newNumInv = pV.numeroInventaire + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroInventaire: newNumInv } })];
            case 2:
                _a.sent();
                return [4 /*yield*/, inventaire_model_1.InventaireModel.create(newInventaire)];
            case 3:
                _a.sent();
                res.send("inventaire created !");
                Inventaire_data_1.sample_inventaireDetails.forEach(function (element) { return __awaiter(void 0, void 0, void 0, function () {
                    var theArticle, newInventaireDetails;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, article_models_1.ArticleModel.findOne({ reference: element.reference })];
                            case 1:
                                theArticle = _a.sent();
                                if (!theArticle) return [3 /*break*/, 3];
                                newInventaireDetails = {
                                    article: theArticle.id,
                                    stockTheorique: element.stockTheorique,
                                    valeurStockTheorique: element.valeurStockTheorique,
                                    stockPhysique: element.stockPhysique,
                                    nouvelleValeurStock: element.nouvelleValeurStock,
                                    ecart: element.ecart,
                                    valeurEcart: element.valeurEcart,
                                    inventaireNumDoc: element.inventaireNumDoc
                                };
                                return [4 /*yield*/, inventaireDetail_model_1.InventaireDetailModel.create(newInventaireDetails)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                res.send("inventaire details created !");
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }));
router.post("/create", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, numeroDocument, date, typeDocument, depot, valide, newInventaire, pV, newNumInv;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, numeroDocument = _a.numeroDocument, date = _a.date, typeDocument = _a.typeDocument, depot = _a.depot, valide = _a.valide;
                newInventaire = {
                    numeroDocument: numeroDocument,
                    date: date,
                    typeDocument: typeDocument,
                    depot: depot,
                    etatValidation: valide
                };
                return [4 /*yield*/, inventaire_model_1.InventaireModel.create(newInventaire)];
            case 1:
                _b.sent();
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 2:
                pV = _b.sent();
                if (!pV) return [3 /*break*/, 4];
                newNumInv = pV.numeroInventaire + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pV._id }, { $set: { numeroInventaire: newNumInv } })];
            case 3:
                _b.sent();
                res.status(200).send("Inventaire created !!");
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
