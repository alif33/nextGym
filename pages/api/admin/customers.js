import nc from 'next-connect';
import Customer from '../../../models/Customer';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const customers = await Customer.find({});
  await db.disconnect();
  res.send(customers);
});

export default handler;