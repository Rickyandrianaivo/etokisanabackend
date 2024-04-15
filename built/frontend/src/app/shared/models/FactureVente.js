"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureVente = void 0;
var FactureVente = /** @class */ (function () {
    function FactureVente() {
        // constructor(public pointDeVente : PointDeVente){
        this.montantAcompte = 0;
        this.paye = false;
        this.annule = false;
        this.depot = this.pointDeVente.nomPV;
        // depot               : string;
    }
    return FactureVente;
}());
exports.FactureVente = FactureVente;
