import { RegisterModel } from "@/app/Lib/Model/RegisterModal"
import { connectLink } from "@/app/Lib/Model/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const POST = async (request, content) => {
    let body = await request.json()
    await mongoose.connect(connectLink).then(() => {
        console.log('POST connected')
    })
    if (body.name || body.email || body.password !== '') {
        let dataForPost = RegisterModel(body)
        let data = dataForPost.save()
        return NextResponse.json({
            data: data,
            message: 'User Registered',
            status: true
        })
    }
    else if (!body.name || !body.email || !body.password) {
        return NextResponse.json({
            data: 'Mising Required Field',
            message: 'User Registered',
            status: true
        })

    }
    else {
        return NextResponse.json({
            data: 'not created',
            message: 'false',
            status: false
        })

    }

}