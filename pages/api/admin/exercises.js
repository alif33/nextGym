import nc from 'next-connect';
import Exercise from '../../../models/Exercise';
import db from '../../../utils/db';

const handler = nc();
// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const exercise = await Exercise.find({});
  await db.disconnect();
  res.send(exercise);
});

export default handler;