"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var article_router_1 = __importDefault(require("./routers/article.router"));
var bonEntrees_router_1 = __importDefault(require("./routers/bonEntrees.router"));
var database_config_1 = require("./configs/database.config");
var user_router_1 = __importDefault(require("./routers/user.router"));
var pointDeVente_router_1 = __importDefault(require("./routers/pointDeVente.router"));
var mouvementStock_router_1 = __importDefault(require("./routers/mouvementStock.router"));
var bonSorties_router_1 = __importDefault(require("./routers/bonSorties.router"));
var inventaire_router_1 = __importDefault(require("./routers/inventaire.router"));
var factureVente_router_1 = __importDefault(require("./routers/factureVente.router"));
var factureVenteDetail_router_1 = __importDefault(require("./routers/factureVenteDetail.router"));
var bonEntreesDetails_router_1 = __importDefault(require("./routers/bonEntreesDetails.router"));
var bonSortiesDetails_router_1 = __importDefault(require("./routers/bonSortiesDetails.router"));
var inventaireDetails_router_1 = __importDefault(require("./routers/inventaireDetails.router"));
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, cors_1.default)({
// credentials:true,
// origin:["http://localhost:4200"]
}));
app.use("/api/users", user_router_1.default);
app.use("/api/articles", article_router_1.default);
app.use("/api/bon-entrees", bonEntrees_router_1.default);
app.use("/api/bon-sorties", bonSorties_router_1.default);
app.use("/api/inventaires", inventaire_router_1.default);
app.use("/api/pointDeVente", pointDeVente_router_1.default);
app.use("/api/facture-ventes", factureVente_router_1.default);
app.use("/api/mouvementStock", mouvementStock_router_1.default);
app.use("/api/inventaireDetails", inventaireDetails_router_1.default);
app.use("/api/bon-entrees-details", bonEntreesDetails_router_1.default);
app.use("/api/bon-sorties-details", bonSortiesDetails_router_1.default);
app.use("/api/facture-vente-details", factureVenteDetail_router_1.default);
var port = 443;
app.listen(port, function () {
    console.log("Website served on http://ids-gescom.onrender.com:" + port);
});
