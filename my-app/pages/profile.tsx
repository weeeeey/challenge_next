import { NextPage } from "next";
import { useState } from "react";

interface UserInfor {
    name: string;
    email: string;
}
const Index: NextPage = () => {
    const [data, setData] = useState<UserInfor>({
        name: "니꼬",
        email: "nicolas@naver.com",
    });
    return (
        <div className="m-5 space-y-3">
            <h1 className="font-bold text-5xl">Welcome {data.name}!</h1>
            <div className="text-xl">Your email is: {data.email}</div>
        </div>
    );
};

export default Index;
