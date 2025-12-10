import nodemailer from 'nodemailer';
import winston from 'winston';
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import handlebars from 'handlebars';
import hbs from 'nodemailer-express-handlebars';
dotenv.config();

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});
// export const sendEmail = async (from: string, to: string, subject: string, html: string) => {
export const SendEmail =  async (
    defaultLayout:string,
    templateName:string,
    destinataireEmail : string,
    subjectEmail:string,
    contextObject:any
)=>{
    try 
    {
        // const transporter = nodemailer.createTransport({
        // host:"commercegestion.com",
        // port: 465,
        // secure:false,
        // auth:{
        //         user: "contact@commercegestion.com",
        //         pass: "Rzh398aNVtFZUu4",
        //     }
        // });
        const transporter = nodemailer.createTransport({
            // service:"gmail",
            host : "smtp.gmail.com",
            port : 587,
            secure : false,
            auth : 
            {
                user:"rickyandrianaivo@gmail.com",
                pass:"jhvr eosv ugec xejz"
            }
        })
        
    transporter.use("compile",hbs({
        viewEngine: {
            extname:'.handlebars',
            defaultLayout: defaultLayout,
            partialsDir:path.resolve('./Utils/Emails/Template'),
            layoutsDir:path.resolve('./Utils/Emails/Template'),
        },
        viewPath : path.resolve("./Utils/Emails/Template/"),
        extName : '.handlebars',
    
    }))
    await transporter.verify((error, success) => {
    if (error) {
        console.error('Erreur de configuration du transporteur SMTP :', error);
    } else {
        console.log('Transporteur SMTP prêt pour l\'envoi d\'emails.',success);
    }})
    //---------------------------
    // 3. Informations email
    //---------------------------
    let emailData = {
        from: 'rickyandrianaivo@gmail.com', // sender address
        to: "ran.domi@yahoo.fr", // list of receivers
        subject: "hello", // Subject line
        // template: "",
        html : "<b>Hello world</b>"
    };
//---------------------------
    // 4. Envoi email (async/await propre)
    //---------------------------
    const sendInfo = await transporter.sendMail(emailData);
        console.log("Email envoyé : ", sendInfo);

        return {
            success : true,
            response : sendInfo.response
        }

    }catch(error){
        console.error("Erreur lors de l'envoi de l'email : ", error);
        return {success:false,error};
    }
}