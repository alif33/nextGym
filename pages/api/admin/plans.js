import nc from 'next-connect';
import AddPlan from '../../../models/AddPlan';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const plan = await AddPlan.find({});
  await db.disconnect();
  res.send(plan);
});

export default handler;
