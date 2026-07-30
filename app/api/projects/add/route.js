import connectDB from "@/config/db";
import Project from "@/models/Project";
import { requireAdmin } from "@/lib/authAdmin";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import slugify from "slugify";


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Upload helper
async function uploadToCloudinary(file) {

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);


  return new Promise((resolve, reject)=>{

    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type:"auto",
        folder:"projects",
      },

      (error,result)=>{

        if(error){
          reject(error);
        }

        else{
          resolve({
            url:result.secure_url,
            publicId:result.public_id,
          });
        }

      }
    );


    stream.end(buffer);

  });

}



export async function POST(request){

  try{


    // Check admin
    const adminUser = await requireAdmin(request);


    if(adminUser instanceof NextResponse){
      return adminUser;
    }


    if(!adminUser){

      return NextResponse.json(
        {
          success:false,
          message:"Unauthorized"
        },
        {
          status:401
        }
      );

    }



    const formData = await request.formData();



    // =========================
    // BASIC DATA
    // =========================


    const title =
      formData.get("title");


    const description =
      formData.get("description");


    const shortDescription =
      formData.get("shortDescription") || "";


    const category =
      formData.get("category");


    const projectType =
      formData.get("projectType") || "New Construction";


    const location =
      formData.get("location");



    if(!title || !description || !category || !location){

      return NextResponse.json(
        {
          success:false,
          message:"Required fields missing"
        },
        {
          status:400
        }
      );

    }




    // =========================
    // JSON FIELDS
    // =========================


    let statistics = {};

    let milestones = [];

    let team = [];

    let services = [];

    let materials = [];

    let features = [];



    try{

      statistics =
        JSON.parse(formData.get("statistics") || "{}");


      milestones =
        JSON.parse(formData.get("milestones") || "[]");


      team =
        JSON.parse(formData.get("team") || "[]");


      services =
        JSON.parse(formData.get("services") || "[]");


      materials =
        JSON.parse(formData.get("materials") || "[]");


      features =
        JSON.parse(formData.get("features") || "[]");


    }

    catch(error){

      return NextResponse.json(
        {
          success:false,
          message:"Invalid JSON format"
        },
        {
          status:400
        }
      );

    }





    // =========================
    // CLOUDINARY UPLOADS
    // =========================



    const coverFile =
      formData.get("coverImage");


    let coverImage = null;



    if(coverFile && coverFile.size > 0){

      coverImage =
        await uploadToCloudinary(coverFile);

    }




    // Gallery images

    const imageFiles =
      formData.getAll("images");


    let images = [];



    if(imageFiles.length){

      images =
        await Promise.all(

          imageFiles.map(file=>
            uploadToCloudinary(file)
          )

        );

    }





    // Before images

    const beforeFiles =
      formData.getAll("beforeImages");


    let beforeImages=[];



    if(beforeFiles.length){

      beforeImages =
        await Promise.all(
          beforeFiles.map(file=>
            uploadToCloudinary(file)
          )
        );

    }




    // After images

    const afterFiles =
      formData.getAll("afterImages");


    let afterImages=[];



    if(afterFiles.length){

      afterImages =
        await Promise.all(
          afterFiles.map(file=>
            uploadToCloudinary(file)
          )
        );

    }




    // Floor plans

    const floorFiles =
      formData.getAll("floorPlans");


    let floorPlans=[];



    if(floorFiles.length){

      floorPlans =
        await Promise.all(
          floorFiles.map(file=>
            uploadToCloudinary(file)
          )
        );

    }

// =========================
// VIDEOS
// =========================


const videoFiles =
  formData.getAll("videos");

const videoTitles = formData.getAll("videoTitles");

let videos = [];


if(videoFiles.length){

  videos = await Promise.all(

      videoFiles.map(async(file,index)=>{

          const uploaded =
              await uploadToCloudinary(file);

          return{

              title:
                  videoTitles[index] ||
                  file.name,

              url:uploaded.url,

              publicId:uploaded.publicId,

              thumbnail:""

          };

      })

  );

}


// =========================
// DOCUMENTS
// =========================


  const documentFiles =
    formData.getAll("documents");

  const documentTitles = formData.getAll("documentTitles");

  let documents = [];


  if(documentFiles.length){

    documents =
      await Promise.all(

          documentFiles.map(async(file,index)=>{

              const uploaded =
                  await uploadToCloudinary(file);

              return{

                  name:
                      documentTitles[index] ||
                      file.name,

                  url:uploaded.url,

                  publicId:uploaded.publicId,

                  fileType:file.type

              };

          })

    );

  }


  // =========================
  // TESTIMONIAL IMAGE
  // =========================

  const testimonialImageFile =
    formData.get("testimonialImage");


  let testimonialImage = null;


  if(
    testimonialImageFile &&
    testimonialImageFile.size > 0
  ){

    testimonialImage =
      await uploadToCloudinary(
        testimonialImageFile
      );

  }



    // =========================
    // SLUG
    // =========================


    const baseSlug =
      slugify(title,{
        lower:true,
        strict:true,
      });


    const random =
      Math.floor(Math.random()*10000);



    const slug =
      `${baseSlug}-${random}`;





    // =========================
    // DATABASE
    // =========================


      await connectDB();

      console.log(
        "DOCUMENT SCHEMA:",
        Project.schema.path("documents")
      );

      console.log(
        "DOCUMENT DATA:",
        documents
      );

      const project = await Project.create({

        userId:adminUser.id,


        title,

        slug,


        shortDescription,


        description,


        category,


        projectType,


        location,



        client:
          formData.get("client") || "",


        contractor:
          formData.get("contractor") || "",


        architect:
          formData.get("architect") || "",



        status:
          formData.get("status") || "Planning",



        progress:
          Number(formData.get("progress") || 0),




        budget:{

          amount:
            Number(formData.get("budget") || 0),

          currency:
            formData.get("currency") || "NGN",

        },




        duration:
          formData.get("duration") || "",



        startDate:
          formData.get("startDate") || null,



        completionDate:
          formData.get("completionDate") || null,



        milestones,


        coverImage,


        images,


        beforeImages,


        afterImages,


        floorPlans,


        videos,


        documents,


        statistics,


        team,


        services,


        materials,


        features,



        testimonial:{

          name:
            formData.get("testimonialName") || "",

          company:
            formData.get("testimonialCompany") || "",

          position:
            formData.get("testimonialPosition") || "",

          message:
            formData.get("testimonialMessage") || "",


          image:testimonialImage
            ? {
                url:testimonialImage.url,
                publicId:testimonialImage.publicId
              }
            : undefined

        },



        featured:
          formData.get("featured") === "true",



        visible:
          formData.get("visible") !== "false",



        metaTitle:
          formData.get("metaTitle") || title,



        metaDescription:
          formData.get("metaDescription") || shortDescription,



        approvalStatus:"Published",


        createdBy:adminUser.id,


      });





    return NextResponse.json(

      {
        success:true,

        message:"Project created successfully",

        project,

      }

    );




  }


  catch(error){


    console.error(
      "[PROJECT_CREATE_ERROR]",
      error
    );


    return NextResponse.json(

      {
        success:false,

        message:error.message,

      },

      {
        status:500
      }

    );

  }

}