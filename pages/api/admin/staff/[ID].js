import nc from 'next-connect';
import Staff from '../../../../models/Staff';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.ID){
        await db.connect();
    const staff = await Staff.findById(req.query.ID);
        await db.disconnect();
        res.send(staff);
    }
});

handler.put(async (req, res) => {

    if(req.query?.ID){

        const { 
            firstName, 
            lastName, 
            gender, 
            mobile, 
            password

          } = req.body;

          await db.connect();
          const update = await Member.updateOne(
            { "_id": req.query.ID }, 
            { $set: { 
                "firstName": firstName,
                "lastName": lastName, 
                "gender": gender, 
                "mobile": mobile
            }}
          );
          if(update.modifiedCount){
              await db.disconnect();
              res.send({
                  success: true,
                  message: 'Staff updated successfully'
              })
          }
    }
});

export default handler;