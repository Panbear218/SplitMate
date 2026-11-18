import mongoose from "mongoose";
import "dotenv/config";
import Avatar from "../models/avatarModel.js";

await mongoose.connect(process.env.MONGO_URI);

const result = await Avatar.updateMany(
  { isSystem: { $exists: false } },
  { $set: { isSystem: true } }
);

console.log(`Updated ${result.modifiedCount} avatars.`);

await mongoose.disconnect();
