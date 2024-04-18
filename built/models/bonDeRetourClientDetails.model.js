"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonDeRetourClientDetailsModel = exports.BonDeRetourClientDetails = void 0;
var mongoose_1 = require("mongoose");
exports.BonDeRetourClientDetails = new mongoose_1.Schema({
    CodeSociete: { type: String, required: false },
    PointDeVente: { type: String, required: false },
    Doc_no: { type: String, required: false },
    NumBL: { type: String, required: false },
    IDLigneCde: { type: Number, required: false },
    Reference: { type: String, required: false },
    Designation: { type: String, required: false },
    QteEntree: { type: Number, required: false }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.BonDeRetourClientDetailsModel = (0, mongoose_1.model)('bonDeRetourClientDetails', exports.BonDeRetourClientDetails);
//# sourceMappingURL=bonDeRetourClientDetails.model.js.map