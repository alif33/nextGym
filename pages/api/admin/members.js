import nc from 'next-connect';
import Member from '../../../models/Member';
import { isAdmin, isAuth } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const members = await Member.find({});
  await db.disconnect();
  res.send(members);
});

export default handler;
