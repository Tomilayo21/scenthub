import mongoose from "mongoose";

console.log("Project model loaded");

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },

    title:{
    type:String,
    trim:true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    oldSlugs: [
      String
    ],

    shortDescription: {
      type: String,
      maxlength: 250,
      trim: true,
    },

    description:{
    type:String,
    },

    category: {
      type: String,
      enum: [
        "Residential",
        "Commercial",
        "Industrial",
        "Renovation",
        "Infrastructure",
        "Interior Design",
      ],
    },

    projectType: {
      type: String,
      enum: [
        "New Construction",
        "Renovation",
        "Extension",
        "Interior Fit-out",
        "Maintenance",
        "Restoration",
      ],
      default: "New Construction",
    },

    tags: [
      String
    ],

    location:{
    type:String,
    default:""
    },  


    coordinates: {
      lat: Number,
      lng: Number,
    },

    client: {
      type: String,
    },


    contractor: {
      type: String,
    },


    architect: {
      type: String,
    },


    status: {
      type: String,
      enum: [
        "Planning",
        "In Progress",
        "Completed",
        "On Hold",
      ],
      default: "Planning",
    },

    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },


    approvalStatus: {
      type: String,
      enum: [
        "Draft",
        "Published",
        "Archived",
      ],
      default: "Draft",
    },

    budget: {
      amount: Number,

      currency: {
        type: String,
        default: "NGN",
      },
    },

    duration: {
      type: String,
    },


    startDate: Date,


    completionDate: Date,

    milestones: [
      {
        title: String,

        description: String,

        date: Date,

        completed: {
          type: Boolean,
          default: false,
        },
      }
    ],

    coverImage: {

      url: String,

      publicId: String,

    },

    images: [
      {
        url: String,

        publicId: String,

        caption: String,


        order: {
          type: Number,
          default: 0,
        },


        featured: {
          type: Boolean,
          default: false,
        },
      },
    ],

    videos: [
      {
        url: String,

        publicId: String,

        title: String,

        thumbnail: String,
      }
    ],

    beforeImages: [
      {
        url: String,
        publicId: String,
      }
    ],

    afterImages: [
      {
        url: String,
        publicId: String,
      }
    ],

    floorPlans: [
      {
        url: String,
        publicId: String,
      }
    ],

    virtualTour: {
      url: String,

      provider: {
        type: String,
        enum:[
          "Matterport",
          "Youtube",
          "Other"
        ]
      }
    },

    documents: [
      {
        name: {
          type: String,
          required: true,
        },

        url: {
          type: String,
          required: true,
        },

        publicId: {
          type: String,
          required: true,
        },

        fileType: {
          type: String,
        },
      },
    ],

    services:[
      String
    ],


    materials:[
      String
    ],


    features:[
      String
    ],

    constructionDetails:{

      foundation:String,

      structure:String,

      roofing:String,

      finishing:String,

      electrical:String,

      plumbing:String,

    },

    statistics: {

      floors:Number,

      bedrooms:Number,

      bathrooms:Number,

      parkingSpaces:Number,

      area:Number,

    },
    team:[
      {
        role:String,

        name:String,

        company:String,
      }
    ],

    testimonial:{

      name:String,

      company:String,

      position:String,

      message:String,

      image:{
        url:String,
        publicId:String,
      }

    },


    featured:{
      type:Boolean,
      default:false,
    },


    order:{
      type:Number,
      default:0,
    },


    visible:{
      type:Boolean,
      default:true,
    },

    virtualTour:{
        url:String,

        provider:{
            type:String,
            enum:[
              "Matterport",
              "YouTube",
              "Other"
            ]
        }
    },

    metaTitle:String,

    metaDescription:String,

    publicationStatus:{
      type:String,
      enum:[
        "draft",
        "published",
        "archived"
      ],
      default:"draft"
    },

    lastSavedAt:{
      type:Date,
      default:Date.now
    },

    draftExpiresAt:{
      type:Date,
    },


    draftArchived:{
      type:Boolean,
      default:false
    },

    draftId:{
      type:String,
      index:true,
    },

    createdBy:{
      type:String,
      ref:"User",
    },


    updatedBy:{
      type:String,
      ref:"User",
    },


  },

  {
    timestamps:true,
  }

);
projectSchema.index({
  category:1,
});

projectSchema.index({
  status:1,
});

projectSchema.index({
  featured:1,
});

projectSchema.index({
  visible:1,
});
projectSchema.index(
{
 userId:1,
 publicationStatus:1
},
{
partialFilterExpression:{
 publicationStatus:"draft"
},
unique:true
}
);
projectSchema.index({
draftExpiresAt:1
});

if (mongoose.models.Project) {
  delete mongoose.models.Project;
}

const Project = mongoose.model(
  "Project",
  projectSchema
);

export default Project;