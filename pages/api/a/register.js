import bcrypt from 'bcryptjs';
import nc from 'next-connect';
import Owner from '../../../models/Owner';
import { signToken } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newOwner = new Owner({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  const owner = await newOwner.save();
  await db.disconnect();

  const token = signToken(owner);
  res.send({
      success: true,
      message: 'Registered successfully'
  });
});

export default handler;