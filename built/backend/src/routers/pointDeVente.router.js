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
var pointDeVente_model_1 = require("../models/pointDeVente.model");
var router = (0, express_1.Router)();
// For the initialising the PV
// router.get("/create/",asyncHandler(
//     async(req, res) => {  
//     const PV = await PointDeVenteModel.countDocuments();
//     if(PV > 0){
//         res.send("Point de vente is already created");
//         return;
//     }
//     await PointDeVenteModel.create(pointDeVente);
//     res.send("New User registered!");
// }))
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res).send;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); }));
router.put("/update", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, codeSociete, codeFournisseur, nomPV, emplacement, ordinateur, telephone1, telephone2, telephone3, pointDeVenteActif, dateDeVente, prefixeVente, numeroVente, dateAchat, prefixeAchat, numeroAchat, dateInventaire, prefixeInventaire, numeroInventaire, dateBE, prefixeBE, numeroBE, dateBS, prefixeBS, numeroBS, dateCloture, prefixeCloture, numeroCloture, numeroMouvementStock, updatedPV;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, codeSociete = _a.codeSociete, codeFournisseur = _a.codeFournisseur, nomPV = _a.nomPV, emplacement = _a.emplacement, ordinateur = _a.ordinateur, telephone1 = _a.telephone1, telephone2 = _a.telephone2, telephone3 = _a.telephone3, pointDeVenteActif = _a.pointDeVenteActif, dateDeVente = _a.dateDeVente, prefixeVente = _a.prefixeVente, numeroVente = _a.numeroVente, dateAchat = _a.dateAchat, prefixeAchat = _a.prefixeAchat, numeroAchat = _a.numeroAchat, dateInventaire = _a.dateInventaire, prefixeInventaire = _a.prefixeInventaire, numeroInventaire = _a.numeroInventaire, dateBE = _a.dateBE, prefixeBE = _a.prefixeBE, numeroBE = _a.numeroBE, dateBS = _a.dateBS, prefixeBS = _a.prefixeBS, numeroBS = _a.numeroBS, dateCloture = _a.dateCloture, prefixeCloture = _a.prefixeCloture, numeroCloture = _a.numeroCloture, numeroMouvementStock = _a.numeroMouvementStock;
                updatedPV = {
                    codeSociete: codeSociete,
                    codeFournisseur: codeFournisseur,
                    nomPV: nomPV,
                    emplacement: emplacement,
                    ordinateur: ordinateur,
                    telephone1: telephone1,
                    telephone2: telephone2,
                    telephone3: telephone3,
                    pointDeVenteActif: pointDeVenteActif,
                    dateDeVente: dateDeVente,
                    prefixeVente: prefixeVente,
                    numeroVente: numeroVente,
                    dateAchat: dateAchat,
                    prefixeAchat: prefixeAchat,
                    numeroAchat: numeroAchat,
                    dateInventaire: dateInventaire,
                    prefixeInventaire: prefixeInventaire,
                    numeroInventaire: numeroInventaire,
                    dateBE: dateBE,
                    prefixeBE: prefixeBE,
                    numeroBE: numeroBE,
                    dateBS: dateBS,
                    prefixeBS: prefixeBS,
                    numeroBS: numeroBS,
                    dateCloture: dateCloture,
                    prefixeCloture: prefixeCloture,
                    numeroCloture: numeroCloture,
                    numeroMouvementStock: numeroMouvementStock,
                };
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne(updatedPV)];
            case 1:
                _b.sent();
                res.send("PV updated!");
                return [2 /*return*/];
        }
    });
}); }));
router.put("/add-vente-detail", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pointDeVente, newNumeroVente, newNumeroMvStock;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                pointDeVente = _a.sent();
                if (!pointDeVente) return [3 /*break*/, 3];
                newNumeroVente = pointDeVente.numeroVente + 1;
                newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroVente: newNumeroVente, numeroMouvementStock: newNumeroMvStock } })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
router.put("/add-bon-entree-detail", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pointDeVente, newNumeroBE, newNumeroMvStock;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                pointDeVente = _a.sent();
                if (!pointDeVente) return [3 /*break*/, 3];
                newNumeroBE = pointDeVente.numeroBE + 1;
                newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBS: newNumeroBE, numeroMouvementStock: newNumeroMvStock } })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
router.put("/add-bon-sortie-detail", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var pointDeVente, newNumeroBS, newNumeroMvStock;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.findOne()];
            case 1:
                pointDeVente = _a.sent();
                if (!pointDeVente) return [3 /*break*/, 3];
                newNumeroBS = pointDeVente.numeroBS + 1;
                newNumeroMvStock = pointDeVente.numeroMouvementStock + 1;
                return [4 /*yield*/, pointDeVente_model_1.PointDeVenteModel.updateOne({ _id: pointDeVente.id }, { $set: { numeroBS: newNumeroBS, numeroMouvementStock: newNumeroMvStock } })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
