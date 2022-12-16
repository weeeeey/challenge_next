import axios from "axios";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Person {
    id: string;
    industies: string[];
    name: string;
    squareImage: string;
}
const Index: NextPage = () => {
    const [data, setData] = useState<Person[]>();
    useEffect(() => {
        axios
            .get("https://billions-api.nomadcoders.workers.dev/")
            .then((res) => {
                setData(res.data.slice(0, 50));
            });
    }, []);
    return (
        <div className="w-full h-[100vh] bg-slate-400 grid grid-cols-4">
            {data?.map((person) => (
                <div key={person.id} className="m-3 bg-red-300">
                    <Image
                        width={200}
                        height={300}
                        src={person.squareImage}
                        alt={person.name}
                    />
                </div>
            ))}
        </div>
    );
};

export default Index;
