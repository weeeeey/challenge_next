import { NextPage } from "next";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { useEffect, useRef, useState } from "react";
const URL = "https://dogs-api.nomadcoders.workers.dev";

interface VideoProp {
    url: string;
    isLiked: boolean;
}
const Index: NextPage = () => {
    const videoRef = useRef();
    const { handleSubmit } = useForm();
    const { mutate, data, error } = useSWR<VideoProp>(URL);
    const onClickNewDog = () => {
        mutate();
        console.log(data);
    };
    const onValid = () => {
        // setVedioUrl(data?.url!);
    };
    useEffect(() => {
        videoRef.current?.load();
    }, [data, mutate]);
    return (
        <div className="w-full max-w-xl mx-auto h-screen">
            {data?.url ? (
                <>
                    <div className="w-full mx-auto">
                        <h1 className="pt-4 text-3xl text-white ">Wolf.tv</h1>
                        <form
                            onSubmit={handleSubmit(onValid)}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* <div className="m-2 w-full h-44 bg-slate-300"></div> */}

                            <video
                                ref={videoRef}
                                muted
                                autoPlay
                                loop
                                className="aspect-auto max-h-96   bg-black"
                            >
                                <source src={data.url} />
                            </video>

                            <div className="mt-4 w-full flex items-center space-x-3">
                                <button
                                    onClick={onClickNewDog}
                                    className="h-12 rounded-xl  w-full bg-white"
                                >
                                    New Dog!
                                </button>
                                <button className="h-12 rounded-xl  w-full bg-blue-400">
                                    Like
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <span className="text-white">loading...</span>
            )}
        </div>
    );
};

export default Index;
