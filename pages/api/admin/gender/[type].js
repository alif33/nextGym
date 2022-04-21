import nc from 'next-connect';
import Member from '../../../../models/Member';
import db from '../../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const female = await Member.find({gender: req.query.type.toUpperCase()});
  await db.disconnect();
  res.send(female);
});

export default handler;
