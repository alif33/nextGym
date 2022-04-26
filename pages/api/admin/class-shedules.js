import nc from 'next-connect';
import ClassShedule from '../../../models/ClassShedule';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const classShedule = await ClassShedule.find({});
  await db.disconnect();
  res.send(classShedule);
});

export default handler;