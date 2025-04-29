import mongoose from "mongoose";

const connectToDB = () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => console.log(err));
  } catch (error) {}
};

export default connectToDB;
