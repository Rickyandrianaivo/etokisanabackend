import { model, Schema } from "mongoose";

export interface ISite {
    siteName:string;
    siteAddress:string;
    siteLat:number;
    siteLng:number;
    siteUserId:string;
}

export const SiteSchema = new Schema<ISite>({
    siteName    :{type:String},
    siteAddress :{type:String},
    siteLat     :{type:Number},
    siteLng     :{type:Number},
    siteUserId  :{type:String},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
})

export const SiteModel = model<ISite>("site",SiteSchema);