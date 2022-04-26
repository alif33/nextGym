import nc from 'next-connect';
import Member from '../../../../models/Member';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const member = await Member.findById(req.query.ID);
        await db.disconnect();
        res.send(member);
    }
});

handler.put(async (req, res) => {
    if(req.query?.ID){
        if(req.query?.status){
            await db.connect();
            const update = await Member.updateOne(
                { "_id": req.query.ID }, 
                { $set: { "status": req.query.status } }
               )
    
            if(update.modifiedCount){
                await db.disconnect();
                res.send({
                    success: true,
                    message: 'Member updated successfully'
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
                payDate, 
                status
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
                    "valid_": valid_,
                    "status": status
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

export default handler;