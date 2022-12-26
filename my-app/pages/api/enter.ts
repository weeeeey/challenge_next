import { NextApiResponse, NextApiRequest } from "next";
import withHandler from "../../libs/withHandler";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.body);
    return res.status(200).end();
};

export default withHandler("POST", handler);
