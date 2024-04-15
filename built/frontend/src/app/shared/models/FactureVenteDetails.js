"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactureVenteDetails = void 0;
var FactureVenteDetails = /** @class */ (function () {
    function FactureVenteDetails() {
        // constructor(public cartItem:CartItems){
        this.prixVenteTTC = this.cartItem.article.prixUnitaireVenteTTC;
        this.remise = 0;
        this.montantNetTTC = this.cartItem.montant;
    }
    return FactureVenteDetails;
}());
exports.FactureVenteDetails = FactureVenteDetails;
