import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
  {
    package: { type: String, required: true }, // course id e.g. "fullstack"
    method: { type: String, required: true, enum: ["bkash", "nagad"] },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    transactionId: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "verified", "rejected"],
    },
  },
  { timestamps: true }, // adds createdAt + updatedAt automatically
);

// Prevent model re-compilation during hot-reload in dev
export default mongoose.models.Enrollment ||
  mongoose.model("Enrollment", EnrollmentSchema);
