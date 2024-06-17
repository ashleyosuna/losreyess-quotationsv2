import connect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await connect();
    console.log("connected");
    await User.create({ username: username, password: hashedPassword });

    console.log(username, password);
    return NextResponse.json({ message: "User registered" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could not register user" },
      { status: 500 }
    );
  }
}
