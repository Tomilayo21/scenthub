import {NextResponse} from "next/server";
import connectDB from "@/config/db";
import Project from "@/models/Project";
import {getServerSession} from "next-auth";
import { authOptions } from "@/lib/authOptions";


export async function DELETE(){

    try{

        await connectDB();

        const session = await getServerSession(authOptions);


        if(!session){

            return NextResponse.json(
            {
                message:"Unauthorized"
            },
            {
                status:401
            }
            );

        }



        await Project.deleteMany({
            userId: session.user.id,
            createdBy: session.user.id,
            publicationStatus:"draft"
        });



        return NextResponse.json(
        {
            success:true
        }
        );



    }
    catch(error){

        return NextResponse.json(
        {
            message:error.message
        },
        {
            status:500
        }
        );

    }

}