"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const winston_1 = tslib_1.__importDefault(require("winston"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const handlebars_1 = tslib_1.__importDefault(require("handlebars"));
dotenv_1.default.config();
const logger = winston_1.default.createLogger({
    level: 'debug',
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
const SendEmail = async (email, subject, payload, template) => {
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.MAIL_HOST,
        port: 465,
        secure: true, // true for port 465, false for others
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const source = fs_1.default.readFileSync(path_1.default.join(__dirname, template), "utf8");
    const compiledTemplate = handlebars_1.default.compile(source);
    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: subject,
        html: compiledTemplate(payload)
    };
    logger.info(`Sending mail to - ${email}`);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.error(error);
        }
        else {
            logger.info('Email sent: ' + info.response);
        }
    });
};
exports.SendEmail = SendEmail;
//# sourceMappingURL=sendEmail%20copy.js.map