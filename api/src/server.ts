//connect database here
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();
const port = 8013;
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(port, () =>
      console.log(`The server is running on port ${port}`)
    );
  })
  .catch((error: Error) => {
    console.log(
      `MongoDB connecting error. Please make sure MongoDB is running. ${error}`
    );
    process.exit(1);
  });
