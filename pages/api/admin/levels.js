import nc from 'next-connect';
import Level from '../../../models/Level';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const levels = await Level.find({});
  await db.disconnect();
  res.send(levels);
});

export default handler;
