import nc from 'next-connect';
import Staff from '../../../models/Staff';
import { isAdmin, isAuth } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const staffs = await Staff.find({});
  await db.disconnect();
  res.send(staffs);
});

export default handler;