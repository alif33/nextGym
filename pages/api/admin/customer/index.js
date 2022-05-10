import nc from "next-connect";
import Customer from "../../../../models/Customer";
import db from "../../../../utils/db";
import { onError } from "../../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
  
  const {
    name,
    email,
    phone,
    country,
    city,
    adress
  } = req.body;
  
  await db.connect();
  const customer = new Customer({
    name,
    email,
    phone,
    country,
    city,
    adress
  });
  if (await customer.save()) {
    await db.disconnect();
    res.send({
      success: true,
      message: "Customer added successfully",
    });
  }
});

export default handler;
