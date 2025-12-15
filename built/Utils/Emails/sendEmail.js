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
// export async function SendEmail (
//     // defaultLayout:string,
//     // templateName:string,
//     destinataireEmail : string,
//     subjectEmail:string,
// <<<<<<< HEAD
//     contextObject:any
// )=>{
//     try 
//     {
//         const transporter = nodemailer.createTransport({
// =======
//     // contextObject:any
// ){
//         const transporter:Transporter = nodemailer.createTransport({
// >>>>>>> 86ce406cd668c6497d5d5c4e096fb64757841847
//             host : "commercegestion.com",
// <<<<<<< HEAD
//             port : 587,
//             secure : false,
//             auth : 
//             {
//                 user:"contact@commercegestion.com",
//                 pass:"Rzh398aNVtFZUu4"
// =======
//             port : 465,
//             secure : true,
//             auth : 
//             {
// <<<<<<< HEAD
//                 user:process.env.EMAIL_USERNAME,
//                 pass:process.env.EMAIL_PASSWORD
// >>>>>>> 0174d6ffb612c3b434c27a64116a39d4eaf41913
// =======
//                 // user:process.env.EMAIL_USERNAME,
//                 // pass:process.env.EMAIL_PASSWORD
//                 user:"contact@commercegestion.com",
//                 pass:"Rzh398aNVtFZUu4"
// >>>>>>> 86ce406cd668c6497d5d5c4e096fb64757841847
//             }
//         })
//     // transporter.use("compile",hbs({
//     //     viewEngine: {
//     //         extname:'.handlebars',
//     //         defaultLayout: defaultLayout,
//     //         partialsDir:path.resolve('./Utils/Emails/Template'),
//     //         layoutsDir:path.resolve('./Utils/Emails/Template'),
//     //     },
//     //     viewPath : path.resolve("./Utils/Emails/Template/"),
//     //     extName : '.handlebars',
//     // }))
//     // await transporter.verify((error, success) => {
//     // if (error) {
//     //     console.error('Erreur de configuration du transporteur SMTP :', error);
//     // } else {
//     //     console.log('Transporteur SMTP prêt pour l\'envoi d\'emails.',success);
//     // }})
//     //---------------------------
//     // 3. Informations email
//     //---------------------------
// <<<<<<< HEAD
//     let emailData = {
// <<<<<<< HEAD
//         from: 'contact@commercegestion.com', // sender address
//         to: destinataireEmail, // list of receivers
//         subject: subjectEmail, // Subject line
//         // template: "",
//         html : "<b>Hello world</b>"
// =======
//         from: process.env.EMAIL_USERNAME, // sender address
//         to: destinataireEmail, // list of receivers
//         subject : subjectEmail,
//         contextObject: contextObject,
// >>>>>>> 0174d6ffb612c3b434c27a64116a39d4eaf41913
// =======
//     const mailOptions = {
//         from: '"Etokisana" <contact@commercegestion.com>', // sender address
//         to: destinataireEmail, // list of receivers
//         subject : subjectEmail,
//         text : "Test réussi",
//         html : "<h1>Test réussi</h1></br> <p>On avance !!</p>"
//         // contextObject: contextObject,
// >>>>>>> 86ce406cd668c6497d5d5c4e096fb64757841847
//     };
//     //---------------------------
//     // 4. Envoi email (async/await propre)
//     //---------------------------
//     try 
//     {
//         const sendInfo = await transporter.sendMail(mailOptions);
//         console.log("Email envoyé : ", sendInfo.messageId);
//         // return {
//         //     success : true,
//         //     response : sendInfo.response
//         // }
//     }catch(error){
//         console.error("Erreur lors de l'envoi de l'email : ", error);
//         // return {success:false,error};
//     }
// }
//# sourceMappingURL=sendEmail.js.map