import nodemailer from 'nodemailer';
// import winston from 'winston';
import dotenv from "dotenv";
// import path from "path";
// import handlebars, { template } from 'handlebars';
import hbs from 'nodemailer-express-handlebars';

import { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_TEMPLATE_PATH, EMAIL_USERNAME } from '../constant/constant.js';
dotenv.config();

// const logger = winston.createLogger({
//     level: 'debug',
//     format: winston.format.json(),
//     transports: [new winston.transports.Console()]
// });
export const SendEmail = async (
    defaultLayout?: string,
    templateName?: string,
    destinataireEmail?: string,
    subjectEmail?: string,
    contextObject?: any
) => {
   
        //--------------------------------------------
        // 1. Création du transporteur de nodemailer
        //--------------------------------------------
        const transporter = nodemailer.createTransport({
            host:EMAIL_HOST,
            port:EMAIL_PORT,
            secure:true,
            auth:{
                user:EMAIL_USERNAME,
                pass:EMAIL_PASSWORD,
            }
        })
        //------------------------------
        // 2. Mise en place du template
        //------------------------------
        transporter.use("compile", hbs({
            viewEngine: {
                extname: '.handlebars',
                defaultLayout: defaultLayout,
                layoutsDir: EMAIL_TEMPLATE_PATH,
                partialsDir: EMAIL_TEMPLATE_PATH,
            },
            viewPath: EMAIL_TEMPLATE_PATH,
            extName: '.handlebars',
        }))


        //---------------------------
        // 2. Verification de l'SMTP
        //---------------------------
        await transporter.verify((error, success) => {
            if (error) {
                console.error('Erreur de configuration du transporteur SMTP :', error);
            } else {
                console.log('Transporteur SMTP prêt pour l\'envoi d\'emails.', success);
            }
        })

        //---------------------------
        // 3. Informations email
        //---------------------------
        let emailData = {
            from: EMAIL_USERNAME, // sender address
            to: destinataireEmail, // list of receivers
            subject: subjectEmail,
            context: contextObject,
            template: templateName
        };
    try {
        //------------------------------------
        // 4. Envoi email (async/await propre)
        //------------------------------------
        const sendInfo = await transporter.sendMail(emailData);
        console.log("Email envoyé : ", sendInfo);

        return {
            success: true,
            response: sendInfo.response
        }

    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email : ", error);
        return { success: false, error };
    }
}