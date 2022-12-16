import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Person {
    id: string;
    industries: string[];
    name: string;
    netWorth: number;
    squareImage: string;
}
const Index: NextPage = () => {
    const [data, setData] = useState<Person[]>();
    const router = useRouter();
    useEffect(() => {
        (async () => console.log('innerFunction'))();
    });
    useEffect(() => {
        (async () => {
            axios
                .get('https://billions-api.nomadcoders.workers.dev/')
                .then((res) => setData(res.data));
        })();
    }, []);
    return (
        <div className="w-full h-full bg-slate-700 grid grid-cols-4">
            {data?.map((person: Person) => (
                <div key={person.id} className="w-52 h-60 m-3 bg-red-300">
                    <div className="w-full">
                        <img src={person.squareImage} alt={person.name} />
                    </div>
                    <div className="flex-col-reverse shadow-md bg-slate-700 ">
                        <div className="text-white text-sm">{person.name}</div>
                        <div className="text-slate-300 text-xs ">
                            <span>
                                {Math.round(person.netWorth / 1000)}billion
                            </span>
                            /<span>{person.industries[0]}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;
