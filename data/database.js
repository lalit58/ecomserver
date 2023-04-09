import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "EShop",
    });

    console.log(`Server connected to databse ${connection.host}`);
  } catch (error) {
    console.log("Some Error in databse");
    process.exit(1);
  }
};
