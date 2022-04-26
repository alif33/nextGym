import nc from "next-connect";
import slugify from "slugify";
import Category from "../../../../models/Category";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  const { categoryName } = req.body;

  await db.connect();
  Category.find({
    categorySlug: slugify(`${categoryName}`, "-"),
  }).exec(async (error, data) => {
    if (data.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Category already Added",
        
      });
    } else {
      const category = new Category({
        categoryName,
        categorySlug: slugify(`${categoryName}`, "-"),
      });
      if (await category.save()) {
        await db.disconnect();
        return res.send({
          success: true,
          message: "Category added successfully",
        });
      }
    }
  });
});

export default handler;
