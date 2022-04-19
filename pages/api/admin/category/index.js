import nc from 'next-connect';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';
import slugify from 'slugify';
import Category from '../../../../models/Category';
  
const handler = nc({ onError });

handler.post(async (req, res) => {
    const { 
      categoryName
    } = req.body;

    await db.connect();
        // Category.find({
        //     categorySlug: slugify(`${ categoryName }`, '-')
        // }).exec()
        const category = new Category({
          categoryName,
          categorySlug: slugify(`${ categoryName }`, '-')
        });
        if(await category.save()){
            await db.disconnect();
             return res.send({
                success: true,
                message: 'Category added successfully'
            })
        }
});

export default handler;
  