import nc from 'next-connect';
import Transaction from '../../../models/Transaction';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const transactions = await Transaction.find({})
    .populate({
        path: 'customer'
    })
    .populate({
        path: 'products',
        populate: {
            path: '_p' 
        }
    });
  await db.disconnect();
  res.send(transactions);
});

export default handler;