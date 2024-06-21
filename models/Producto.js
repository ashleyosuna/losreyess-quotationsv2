import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: ["PZA", "CJA"],
    default: 0,
  },
  marca: {
    type: String,
  },
  discount: {
    type: Number,
    default: 15,
  },
});

const Product = models.Product || mongoose.model("Product", productSchema);
export default Product;
