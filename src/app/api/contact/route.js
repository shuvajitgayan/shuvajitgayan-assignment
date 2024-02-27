import { NextResponse } from "next/server"
import Friend from "@/models/user.modl"
import { connect } from "@/db/dbconfig"


export async function POST(req){
    const {firstName,lastName,email,message} = await req.json()

    console.log('First Name:',firstName)
    console.log('Last NAme:',lastName)
    console.log('email:',email)
    console.log('Message:',message)

    try {
        await connect()
        await Friend.connect({firstName,lastName,email,message})

        return NextResponse.json({msg:'message send sucessfully'},
        {sucess:true})
        
    } catch (error) {
        return NextResponse.json({error:error.message},
        {status:500}    
        )
    }

    return NextResponse.json({msg:'connect route.js'})
}