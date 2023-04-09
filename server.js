import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(process.env.STRIPE_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARTY_NAME,
  api_key: process.env.CLOUDINARTY_API_KEY,
  api_secret: process.env.CLOUDINARTY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE.`
  );
});
