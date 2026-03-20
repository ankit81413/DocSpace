import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  title: String,
  content: String,
}, { timestamps: true });

export default mongoose.models.Document || mongoose.model("Document", DocumentSchema);