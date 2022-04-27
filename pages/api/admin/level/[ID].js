import nc from 'next-connect';
import Level from '../../../../models/Level';
import Member from '../../../../models/Member';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const level = await Level.findById(req.query.ID);
        await db.disconnect();
        res.send(level);
    }
});

handler.put(async (req, res) => {

    if(req.query?.ID){
        if(req.query?.status){
            await db.connect();
            const update = await Level.updateOne(
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
                payDate 
              } = req.body;

              await db.connect();
              const update = await Member.updateOne(
                { "_id": req.query.ID }, 
                { $set: { 
                    "valid_": valid_
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



handler.delete(async (req, res) => {
    if(req.query?.ID){
        Product.find({ _id: req.query.ID  }).remove(()=>{
            res.send({
                success: true,
                message: 'Product deleted successfully'
            });
        });
    }
  });
export default handler;