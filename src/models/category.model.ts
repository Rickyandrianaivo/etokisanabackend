import { model, Schema } from "mongoose";

export interface ICategory{
    CatName:string;
}

export const CategorySchema = new Schema<ICategory>({
    CatName :  {type : String,required:true}
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const CategoryModel = model<ICategory>('category',CategorySchema)