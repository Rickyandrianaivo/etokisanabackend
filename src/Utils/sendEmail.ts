import nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import handlebars from 'handlebars';
dotenv.config();

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
    export const sendEmail = async (email : string , subject : string , payload : any, template : string) => {
       
        const transporter = nodemailer.createTransport({
        service: process.env.MAIL_HOST,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    const compiledTemplate = handlebars.compile(source)
    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: subject,
        html: compiledTemplate(payload)
    };

    logger.info(`Sending mail to - ${email}`);
    transporter.sendMail(mailOptions, (error, info)=> {
        if (error) {
            logger.error(error);
        } else {
            logger.info('Email sent: ' + info.response);
        }
    });
}