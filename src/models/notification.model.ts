import { model, Schema } from "mongoose";

export interface INotification{
    userId  : string;
    title   : string;
    message : string ;
    states  : string ;
}
export const NotificationSchema = new Schema<INotification>({
    userId  : { type : String,required:true},
    title   : { type : String, required : true},
    message : { type : String},
    states  : { type : String, required : true},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
})
export const NotificationModel = model<INotification>('notification',NotificationSchema)