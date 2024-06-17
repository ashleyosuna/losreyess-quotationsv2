// import { Model, models, model } from "mongoose";
// import { Schema } from "mongoose";
// import bcrypt from "bcrypt";

// const userSchema = new Schema({
//   username: { type: String, required: true, trim: true },
//   password: { type: String, required: true },
//   role: { type: "general" | "admin", default: "general" },
// });

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     throw error;
//   }
// });

// userSchema.methods.comparePassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw error;
//   }
// };

// const UserModal = models.User || model("User", userSchema);

// export default UserModal;

import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "general",
    required: true,
  },
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
