import nc from 'next-connect';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';
import { isAdmin } from '../../../../utils/auth';
import Attendance from '../../../../models/Attendance';

const handler = nc({ onError });
handler.use(isAdmin).post(async (req, res) => {
    const { 
      present
    } = req.body;

    await db.connect();
    const attendance = new Attendance({
      _date: "4/5/22",
      present,
      _owner: req.admin._id
    });
  if(await attendance.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Attendance added successfully'
    })
  }
});

// handler.delete(async (req, res) => {
//   if(req.query?._id){
//       Player.find({ _id: req.query._id  }).remove(()=>{
//           res.send({
//               success: true,
//               message: 'Player deleted successfully'
//           });
//       });
//   }
// });

export default handler;
  


