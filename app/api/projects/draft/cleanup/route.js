import {NextResponse} from "next/server";
import connectDB from "@/config/db";
import Project from "@/models/Project";


export async function DELETE(){

try{


await connectDB();



const result =
await Project.updateMany(
{

publicationStatus:"draft",

draftExpiresAt:{
$lt:new Date()
}

},

{

draftArchived:true,

publicationStatus:"archived"

}

);



return NextResponse.json({

success:true,

cleaned:result.modifiedCount

});


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