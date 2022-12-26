import { NextApiRequest, NextApiResponse } from "next";

const withHandler = (
    method: "GET" | "POST" | "DELETE",
    fn: (req: NextApiRequest, res: NextApiResponse) => void
) => {
    return async function (req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== method) {
            console.log("error");
            return res.status(405).end();
        }
        try {
            await fn(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    };
};

export default withHandler;
