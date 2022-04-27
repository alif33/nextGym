import nc from 'next-connect';
import Level from '../../../../models/Level';
import { isAdmin } from '../../../../utils/auth';
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
});



handler.use(isAdmin).delete(async (req, res) => {
    if(req.query?.ID){
        Level.find({ _id: req.query.ID  }).remove(()=>{
            res.send({
                success: true,
                message: 'Level deleted successfully'
            });
        });
    }
  });
export default handler;