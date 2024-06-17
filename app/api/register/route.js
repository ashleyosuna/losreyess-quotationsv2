import connect from "@/lib/db";
import { NextResponse } from "next/server";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  //console.log(req);
  try {
    const { username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
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
