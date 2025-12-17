"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const winston_1 = tslib_1.__importDefault(require("winston"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const nodemailer_express_handlebars_1 = tslib_1.__importDefault(require("nodemailer-express-handlebars"));
const constant_js_1 = require("../constant/constant.js");
dotenv_1.default.config();
const logger = winston_1.default.createLogger({
    level: 'debug',
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
const SendEmail = async (defaultLayout, templateName, destinataireEmail, subjectEmail, contextObject) => {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: constant_js_1.EMAIL_HOST,
            port: constant_js_1.EMAIL_PORT,
            secure: true,
            auth: {
                user: constant_js_1.EMAIL_USERNAME,
                pass: constant_js_1.EMAIL_PASSWORD
            }
        });
        transporter.use("compile", (0, nodemailer_express_handlebars_1.default)({
            viewEngine: {
                extname: '.handlebars',
                defaultLayout: defaultLayout,
                partialsDir: constant_js_1.EMAIL_TEMPLATE_PATH,
                layoutsDir: constant_js_1.EMAIL_TEMPLATE_PATH
            },
            viewPath: constant_js_1.EMAIL_TEMPLATE_PATH,
            extName: '.handlebars',
        }));
        await transporter.verify((error, success) => {
            if (error) {
                console.error('Erreur de configuration du transporteur SMTP :', error);
            }
            else {
                console.log('Transporteur SMTP prêt pour l\'envoi d\'emails.', success);
            }
        });
        //---------------------------
        // 3. Informations email
        //---------------------------
        let emailData = {
            from: constant_js_1.EMAIL_USERNAME, // sender address
            to: destinataireEmail, // list of receivers
            subject: subjectEmail,
            context: contextObject,
            template: templateName
        };
        //---------------------------
        // 4. Envoi email (async/await propre)
        //---------------------------
        const sendInfo = await transporter.sendMail(emailData);
        console.log("Email envoyé : ", sendInfo);
        return {
            success: true,
            response: sendInfo.response
        };
    }
    catch (error) {
        console.error("Erreur lors de l'envoi de l'email : ", error);
        return { success: false, error };
    }
};
exports.SendEmail = SendEmail;
//# sourceMappingURL=sendEmail.js.map