import nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from "dotenv";
// import path from "path";
// import handlebars from 'handlebars';
// import hbs from 'nodemailer-express-handlebars';
dotenv.config();
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
export const SendEmail = async (
// defaultLayout:string,
// templateName:string,
destinataireEmail, subjectEmail) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "commercegestion.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        // transporter.use("compile",hbs({
        //     viewEngine: {
        //         extname:'.handlebars',
        //         defaultLayout: defaultLayout,
        //         partialsDir:path.resolve('./Utils/Emails/Template'),
        //         layoutsDir:path.resolve('./Utils/Emails/Template'),
        //     },
        //     viewPath : path.resolve("./Utils/Emails/Template/"),
        //     extName : '.handlebars',
        // }))
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
            // contextObject: contextObject,
            html: "<h1>Test réussie</h1></br> <p>On avance !!</p>"
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
//# sourceMappingURL=sendEmail.js.map