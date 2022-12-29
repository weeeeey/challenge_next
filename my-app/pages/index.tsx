import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import useDog from "../libs/useDog";

const Index: NextPage = () => {
    const videoRef = useRef();
    const { handleSubmit } = useForm();
    const { mutate, dog, isLoading } = useDog();
    const onClickNewDog = () => {
        mutate();
        console.log(dog);
    };
    const onClieckLike = () => {
        mutate((prev: any) => ({ ...prev, isLiked: !prev.isLiked }), false);
    };
    const onValid = () => {
        console.log("as");
    };
    useEffect(() => {
        videoRef.current?.load();
    }, [dog, mutate]);
    return (
        <div className="w-full max-w-xl mx-auto h-screen">
            {dog?.url ? (
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
                                className="aspect-auto h-96 bg-black"
                            >
                                <source src={dog.url} />
                            </video>

                            <div className="mt-4 w-full flex items-center space-x-3">
                                <button
                                    onClick={onClickNewDog}
                                    className="h-12 rounded-xl  w-full bg-white"
                                >
                                    New Dog!
                                </button>
                                <button
                                    onClick={onClieckLike}
                                    className="h-12 rounded-xl  w-full bg-blue-400"
                                >
                                    {dog.isLiked ? "unLike" : "Like"}
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
