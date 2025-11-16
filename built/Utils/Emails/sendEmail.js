import nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from "dotenv";
import hbs from 'nodemailer-express-handlebars';
dotenv.config();
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
export const SendEmail = async (defaultLayout, templateName, destinataireEmail, subjectEmail, contextObject) => {
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        // host : "commercegestion.com",
        // port: 465,
        // secure: true, // true for port 465, false for other ports
        port: 587,
        debug: true,
        logger: true,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
            // user: "contact@commercegestion.com",
            // pass: "Rzh398aNVtFZUu4"
        },
    });
    transporter.use("compile", hbs({
        viewEngine: {
            extname: '.handlebars',
            partialsDir: './Utils/Emails/Template',
            layoutsDir: './Utils/Emails/Template',
            defaultLayout: defaultLayout
        },
        viewPath: "./Utils/Emails/Template/",
        extName: '.handlebars'
    }));
    let info = {
        from: 'Etokisana <contact@commercegestion.com>', // sender address
        to: destinataireEmail, // list of receivers
        subject: subjectEmail, // Subject line
        template: templateName,
        context: contextObject
    };
    transporter.verify((error, success) => {
        if (error) {
            console.error('Erreur de configuration du transporteur SMTP :', error);
        }
        else {
            console.log('Transporteur SMTP prêt pour l\'envoi d\'emails.', success);
        }
    });
    transporter.sendMail(info, (error, info) => {
        if (error) {
            // console.log(info);
            // console.log(error);
            return console.log('Erreur lors de l\'envoi:', error);
        }
        else {
            console.log('Message envoyé : %s' + info.response);
        }
    });
};
//# sourceMappingURL=sendEmail.js.map