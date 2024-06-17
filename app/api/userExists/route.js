import connect from "@/lib/db";
import { NextResponse } from "next/server";
import User from "../../../models/User";

export async function POST(req) {
  try {
    const { username } = await req.json();
    await connect();
    const existingUser = await User.findOne({ username }).select("_id");
    if (existingUser)
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    else
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 200 }
      );
  } catch (error) {
    console.log("Error finding user", error);
    return NextResponse({ message: "Error finding user" }, { status: 500 });
  }
}
