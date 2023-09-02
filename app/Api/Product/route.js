import { ProductModel } from "@/app/Lib/Model/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    const connectLink = 'mongodb+srv://testUser:testUser@cluster0.pqupbty.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(connectLink).then(() => {
        console.log('Connected')
    })
    let Products = await ProductModel.find()

    if (Products) {
        return NextResponse.json({
            data: Products,
            status: true
        })
    }
    else {
        return NextResponse.json({
            data: 'Not found',
            status: true
        })

    }
}


export async function POST(request, content) {
    let body = await request.json()
    const connectLink = 'mongodb+srv://testUser:testUser@cluster0.pqupbty.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(connectLink).then(() => {
        console.log('Connected')
    })
    let dataForPost = ProductModel(body)
    let data = dataForPost.save()
    if (body) {
       
        return NextResponse.json({
            data: data,
            status: true
        })
    }
    else{
        return NextResponse.json({
            data: data,
            status: false
        })

    }

}