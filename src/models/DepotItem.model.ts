import { model, Schema } from "mongoose";

export interface IDepotItem{
    productId : string,
    stock: number,
    prix   : number,
    lastUpdate : Date,
    currentDepotId : string,
}
export const DepotItemSchema = new Schema<IDepotItem>({
    
    productId : {type : String,ref:'product'},
    stock: {type : Number},
    prix   : {type : Number},
    lastUpdate : {type : Date},
    currentDepotId : {type : String},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const DepotItemModel = model<IDepotItem>('depotItem',DepotItemSchema)