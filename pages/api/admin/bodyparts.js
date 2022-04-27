import nc from 'next-connect';
import Bodypart from '../../../models/Bodypart';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const bodyparts = await Bodypart.find({});
  await db.disconnect();
  res.send(bodyparts);
});

export default handler;
