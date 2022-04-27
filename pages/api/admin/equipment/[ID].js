import nc from 'next-connect';
import Equipment from '../../../../models/Equipment';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const product = await Equipment.findById(req.query.ID);
        await db.disconnect();
        res.send(product);
    }
});

handler.put(async (req, res) => {

    if(req.query?.ID){
        if(req.query?.status){
            await db.connect();
            const update = await Equipment.updateOne(
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
                firstName, 
                lastName, 
                gender, 
                mobile, 
                password, 
                _package, 
                _valid, 
                valid_, 
                payDate 
              } = req.body;

              await db.connect();
              const update = await Member.updateOne(
                { "_id": req.query.ID }, 
                { $set: { 
                    "firstName": firstName,
                    "lastName": lastName, 
                    "gender": gender, 
                    "mobile": mobile, 
                    "_package": _package, 
                    "_valid": _valid, 
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



handler.use(isAdmin).delete(async (req, res) => {
    if(req.query?.ID){
        Equipment.find({ _id: req.query.ID  }).remove(()=>{
            res.send({
                success: true,
                message: 'Equipment deleted successfully'
            });
        });
    }
  });
export default handler;