import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.json({ message: "hello world" });
}
