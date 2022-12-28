import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
    interface IrionSessionData {
        user: {
            id: number;
        };
    }
}

const cookieOptions = {
    cookieName: "asdasdasdasd",
    password:
        "asdmkmoiewdlfkvjdlksdfjlksdfjlksdfjlksdfjlskdfjiwefjowefj123123,mnfsdfn",
};

export function withApiSession(fn: any) {
    return withIronSessionApiRoute(fn, cookieOptions);
}
