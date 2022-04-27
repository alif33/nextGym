import nc from 'next-connect';
import Equipment from '../../../models/Equipment';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const equipments = await Equipment.find({});
  await db.disconnect();
  res.send(equipments);
});

export default handler;
