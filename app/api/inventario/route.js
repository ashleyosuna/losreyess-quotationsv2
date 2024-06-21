import connect from "@/lib/db";
import { NextResponse } from "next/server";
import Product from "../../../models/Producto";

export async function GET(req) {
  try {
    await connect();
    const products = await Product.find({});
    if (products) {
      return NextResponse.json({ data: products }, { status: 200 });
    } else
      return NextResponse.json(
        { message: "Products not found" },
        { status: 404 }
      );
  } catch (error) {
    console.log("Error getting inventory:", error);
    return NextResponse.json(
      { message: "Error getting inventory" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connect();
    const { description, price, amount } = await req.json();
    await Product.create({
      description: description,
      price: price,
      amount: amount,
    });
    return NextResponse.json({ message: "Product created" }, { status: 200 });
  } catch (error) {
    console.log("Error creating product", error);
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
}
