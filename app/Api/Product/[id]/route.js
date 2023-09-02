import { ProductModel } from "@/app/Lib/Model/Product"
import { NextResponse } from "next/server"
import mongoose from "mongoose"
export async function PUT(request, content) {
    let body = await request.json()
    let id = content.params.id
    const ID = { _id: id }
    console.log(ID)
    const connectLink = 'mongodb+srv://testUser:testUser@cluster0.pqupbty.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(connectLink).then(() => {
        console.log('Connected')
    })

    let dataforPUT = await ProductModel.findOneAndUpdate(ID, body)
    return NextResponse.json({
        data: dataforPUT,
        status: true
    })


}


export async function DELETE(request, content) {
    // let body = await request.json()`
    let id = await content.params.id
    console.log(id)
    const ID = { _id: id }
    console.log(ID)
    const connectLink = 'mongodb+srv://testUser:testUser@cluster0.pqupbty.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(connectLink).then(() => {
        console.log('Connected')
    })

    let dataforDelete = await ProductModel.deleteOne(ID)
    return NextResponse.json({
        data: dataforDelete,
        status: true
    })

}


// export async function DELETE(content) {
//     let id = content.params.id
//     const ID = { _id: id }
//     const connectLink = 'mongodb+srv://testUser:testUser@cluster0.pqupbty.mongodb.net/?retryWrites=true&w=majority'
//     await mongoose.connect(connectLink).then(() => {
//         console.log('Connected')
//     })
//     let dataforDelete = await ProductModel.deleteOne(ID)
//     return NextResponse.json({
//         data: dataforDelete,
//         status: true
//     })

// }