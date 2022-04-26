import nc from 'next-connect';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';
import { isAdmin } from '../../../../utils/auth';
import ClassShedule from '../../../../models/ClassShedule';

const handler = nc({ onError });
handler.use(isAdmin).post(async (req, res) => {
    const { 
      className,
      staffMember,
      startDate,
      endDate,
      selectedDate,
      memberLimit,
      startTime,
      endTime
    } = req.body;

    await db.connect();
    const classShedule = new ClassShedule({
      className,
      staffMember,
      startDate,
      endDate,
      selectedDate,
      memberLimit,
      startTime,
      endTime,
      _owner: req.admin._id
    });
  if(await classShedule.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Class added successfully'
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
  


