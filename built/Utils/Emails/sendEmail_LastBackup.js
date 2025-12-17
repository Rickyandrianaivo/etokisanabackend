"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const winston_1 = tslib_1.__importDefault(require("winston"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = tslib_1.__importDefault(require("path"));
const nodemailer_express_handlebars_1 = tslib_1.__importDefault(require("nodemailer-express-handlebars"));
dotenv_1.default.config();
const logger = winston_1.default.createLogger({
    level: 'debug',
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
const SendEmail = async (defaultLayout, templateName, destinataireEmail, subjectEmail, contextObject) => {
    try {
        // const transporter = nodemailer.createTransport({
        // host:"commercegestion.com",
        // port: 465,
        // secure:false,
        // auth:{
        //         user: "contact@commercegestion.com",
        //         pass: "Rzh398aNVtFZUu4",
        //     }
        // });
        const transporter = nodemailer_1.default.createTransport({
            host: "commercegestion.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        transporter.use("compile", (0, nodemailer_express_handlebars_1.default)({
            viewEngine: {
                extname: '.handlebars',
                defaultLayout: defaultLayout,
                partialsDir: path_1.default.resolve('./Utils/Emails/Template'),
                layoutsDir: path_1.default.resolve('./Utils/Emails/Template'),
            },
            viewPath: path_1.default.resolve("./Utils/Emails/Template/"),
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
            from: process.env.EMAIL_USERNAME, // sender address
            to: destinataireEmail, // list of receivers
            subject: subjectEmail,
            contextObject: contextObject,
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
//# sourceMappingURL=sendEmail_LastBackup.js.map