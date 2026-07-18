import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Residential",
        "Commercial",
        "Industrial",
        "Renovation",
        "Infrastructure",
        "Interior Design",
      ],
    },

    location: {
      type: String,
      required: true,
    },

    client: {
      type: String,
    },

    contractor: {
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

    budget: {
      type: Number,
    },

    startDate: Date,

    completionDate: Date,

    coverImage: String,

    images: [String],

    documents: [
      {
        name: String,
        url: String,
      },
    ],

    features: [String],

    visible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.project ||
  mongoose.model("project", projectSchema);

export default Project;