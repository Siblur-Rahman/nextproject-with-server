import Todo from "@/lib/model/tobo";
import connectToDB from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDB();
    const result = await Todo.find();
    return NextResponse.json(result);
  } catch (error) {}
};

export const POST = async (req, res) => {
  try {
    const data = await req.json();
    connectToDB();
    const result = await Todo.create(data);
    return NextResponse.json(result);
  } catch (error) {}
};
