import { NextApiRequest, NextApiResponse } from "next";

const URL = "https://dogs-api.nomadcoders.workers.dev";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data = {};
    return async () => {
        const respon = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return respon.json();
    };
};

export default handler;
