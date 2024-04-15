"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItems = void 0;
var CartItems = /** @class */ (function () {
    function CartItems() {
        // constructor(public article:Article){
        this.montant = this.article.prixUnitaireVenteTTC;
        this.quantity = 1;
    }
    return CartItems;
}());
exports.CartItems = CartItems;
