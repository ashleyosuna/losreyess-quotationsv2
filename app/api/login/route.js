import connect from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log(req);
  try {
    const { username, password } = await req.json();

    await connect();
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
