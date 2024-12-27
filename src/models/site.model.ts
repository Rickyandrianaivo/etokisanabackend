import { model, Schema } from "mongoose";

export interface ISite {
    SiteName:string;
    SiteAddress:string;
    SiteLat:number;
    SiteLng:number;
    SiteUserId:string;
}

export const SiteSchema = new Schema<ISite>({
    SiteName    :{type:String},
    SiteAddress :{type:String},
    SiteLat     :{type:Number},
    SiteLng     :{type:Number},
    SiteUserId  :{type:String},
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