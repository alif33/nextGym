import nc from 'next-connect';
import Category from "../../../../models/Category";
import db from '../../../../utils/db';
const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const category = await Category.findById(req.query.ID);
        await db.disconnect();
        res.send(category);
    }
});

handler.put(async (req, res) => {

    if(req.query?.ID){
        if(req.query?.status){
            await db.connect();
            const update = await Category.updateOne(
                { "_id": req.query.ID }, 
                { $set: { "status": req.query.status } }
               )
    
            if(update.modifiedCount){
                await db.disconnect();
                res.send({
                    success: true,
                })
            }
        }else{
            const { 
              categoryName
              } = req.body;

              await db.connect();
              const update = await Category.updateOne(
                { "_id": req.query.ID }, 
                { $set: { 
                    "categoryName": categoryName,
                   
                }}
              );
              if(update.modifiedCount){
                  await db.disconnect();
                  res.send({
                      success: true,
                      message: 'Member updated successfully'
                  })
              }
        }
    }
});

handler.Delete(async (req, res) => {
    if(req.query?.ID){
        Category.find({ _id: req.query.ID  }).remove(()=>{
            res.send({
                success: true,
                message: 'Product deleted successfully'
            });
        });
    }
  });

export default handler;