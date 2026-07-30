import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Project from "@/models/Project";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { v4 as uuid } from "uuid";
import slugify from "slugify";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const userId =
      session.user?.id ||
      session.user?._id;

    if (!userId) {
      return NextResponse.json(
        {
          message: "User ID missing from session.",
          session,
        },
        {
          status: 500,
        }
      );
    }

    const body = await req.json();

    let draft;

    if (body.draftId) {
      draft = await Project.findOneAndUpdate(
        {
          draftId: body.draftId,
          userId,
          createdBy: userId,
          publicationStatus: "draft",
        },
        {
          ...body,

          userId,

          createdBy: userId,

          slug: slugify(
            body.title || `draft-${body.draftId}`,
            {
              lower: true,
              strict: true,
            }
          ),

          lastSavedAt: new Date(),

          draftExpiresAt: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ),
        },
        {
            returnDocument:"after",
            runValidators:true
        }
      );

      // If the draft doesn't exist anymore, create it.
      if (!draft) {
        draft = await Project.create({
          ...body,

          userId,

          createdBy: userId,

          slug: slugify(
            body.title || `draft-${uuid()}`,
            {
              lower: true,
              strict: true,
            }
          ),

          draftId: body.draftId,

          publicationStatus: "draft",

          lastSavedAt: new Date(),

          draftExpiresAt: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ),
        });
      }
    } else {


        await Project.updateMany(
            {
                userId,
                createdBy:userId,
                publicationStatus:"draft"
            },
            {
                $set:{
                publicationStatus:"archived",
                draftArchived:true
            }
            }
        );



        draft = await Project.create({
        ...body,

        userId,

        createdBy: userId,

        slug: slugify(
          body.title || `draft-${uuid()}`,
          {
            lower: true,
            strict: true,
          }
        ),

        draftId: uuid(),

        publicationStatus: "draft",

        lastSavedAt: new Date(),

        draftExpiresAt: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ),
      });
    }

    return NextResponse.json({
      success: true,
      draft,
    });
  } catch (error) {
    console.error("========== DRAFT SAVE ERROR ==========");
    console.error(error);

    if (error.name) {
        console.error("Name:", error.name);
    }

    if (error.message) {
        console.error("Message:", error.message);
    }

    if (error.stack) {
        console.error(error.stack);
    }

    if (error.errors) {
        console.error("Validation Errors:");

        Object.keys(error.errors).forEach((key) => {
        console.error(
            key,
            error.errors[key].message
        );
        });
    }

    return NextResponse.json(
        {
        success: false,
        name: error.name,
        message: error.message,
        errors: error.errors || null,
        },
        {
        status: 500,
        }
    );
    }
}

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({
        draft: null,
      });
    }

    const userId =
      session.user?.id ||
      session.user?._id;

    if (!userId) {
      return NextResponse.json({
        draft: null,
      });
    }

    const draft = await Project.findOne({
      userId,
      createdBy: userId,
      publicationStatus: "draft",
      draftArchived:false,
    }).sort({
      updatedAt: -1,
    });

    return NextResponse.json(
      draft || null
    );
  } catch (error) {
    console.error("DRAFT LOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}