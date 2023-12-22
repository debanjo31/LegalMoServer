import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      // required: [true, 'Please provide a Username'],
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    officialEmail: {
      type: String,
      // required: [true, 'Please provide a valid email address'],
      lowercase: true,
      unique: true,
    },
    isEmailConfirmed: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
      allowNull: true,
    },
    profileImage: {
      public_id: {
        type: String,
        default: "profileImage",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/ds8byyltz/image/upload/v1703242828/default-logo_x1rmai.webp",
      },
    },
    password: {
      type: String,
      required: false,
    },
    companies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Company", // Reference to the Company model
      },
    ],
    lawyers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lawyer", // Reference to the Lawyer model
      },
    ],
    jobs: {
      type: [String],
    },
    passwordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    lastDevice: {
      type: String,
    },
    lastLocation: {
      type: String,
    },
    userType: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

export const Admin = model("Admin", adminSchema);
