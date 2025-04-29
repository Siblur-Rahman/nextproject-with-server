import Todo from "@/lib/model/tobo";
import connectToDB from "@/lib/mongoose";

export const GET = async () => {
  try {
    connectToDB();
    const result = await Todo.find();
  } catch (error) {}
};
