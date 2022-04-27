import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import nc from "next-connect";
import streamifier from "streamifier";
import Plan from "../../../../models/Plan";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({ onError });
const upload = multer();

handler.use(upload.single("image")).post(async (req, res) => {
  const {
    title,
    monthlyPrice,
    status,
    ingredients
  } = req.body;
  console.log(title)

  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };
  const { url } = await streamUpload(req);

  if (url) {
    await db.connect();
    const product = new Plan({
      title,
      monthlyPrice,
      status,
      ingredients,
      image: url,
    });
    if (await product.save()) {
      await db.disconnect();
      res.send({
        success: true,
        message: "Plan added successfully",
      });
    }
  }
});

export default handler;
