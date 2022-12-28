import { NextApiResponse, NextApiRequest } from "next";
import withHandler from "../../lib/server/withHandler";
import client from "../../lib/server/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ ok: false });
  const user = await client.user.create({
    data: {
      email,
      name
    }
  });
  const token = await client.token.create({
    data: {
      email,
      user: {
        connect: {
          id: user.id
        }
      }
    }
  });
  console.log(token);
  return res.json({ ok: true });
};

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
