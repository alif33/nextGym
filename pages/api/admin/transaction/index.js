import nc from "next-connect";
import Transaction from "../../../../models/Transaction";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  
  const {
    customer,
    products,
    subTotal,
    total
  } = req.body;
  
  await db.connect();
  const transaction = new Transaction({
    customer,
    products,
    total
  });
  // return res.send(req.body);
  if (await transaction.save()) {
    await db.disconnect();
    res.send({
      success: true,
      message: "Transaction added successfully",
    });
  }
});

export default handler;
