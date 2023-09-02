import mongoose from "mongoose";
const ProductSchema = mongoose.Schema({
    name: String
})

// idhr [] in brackets mein shcema ai ga

if (mongoose.models['products']) {
    delete mongoose.models['products'];
}


export const ProductModel = mongoose.model('products', ProductSchema)