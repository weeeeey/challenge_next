import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import useDog from "../libs/useDog";

const Index: NextPage = () => {
    const [isLike, setIsLike] = useState<boolean>(true);
    const videoRef = useRef<any>();
    const { mutate, dog, isLoading } = useDog();
    const onClickNewDog = (e: React.MouseEvent<HTMLElement>) => {
        mutate((prev: any) => ({ ...prev, isLiked: isLike }), false);
        mutate();
        console.log(dog);
        e.preventDefault();
    };
    const onClieckLike = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsLike((prev) => !prev);
    };

    useEffect(() => {
        videoRef.current?.load();
        setIsLike((prev) => !prev);
    }, [dog?.url]);
    return (
        <div className="w-full max-w-xl mx-auto h-screen">
            {dog?.url ? (
                <>
                    <div className="w-full mx-auto">
                        <h1 className="pt-4 text-3xl text-white ">Wolf.tv</h1>
                        {/* <div className="m-2 w-full h-44 bg-slate-300"></div> */}

                        <video
                            ref={videoRef}
                            muted
                            autoPlay
                            loop
                            className="aspect-auto h-96 bg-black mx-auto"
                        >
                            <source src={dog.url} />
                        </video>

                        <form className="flex flex-col items-center justify-center">
                            <div className="mt-4 w-full flex items-center space-x-3">
                                <button
                                    onClick={onClickNewDog}
                                    className="h-12 rounded-xl  w-full bg-white"
                                >
                                    New Dog!
                                </button>
                                <button
                                    onClick={onClieckLike}
                                    className="h-12 rounded-xl  w-full bg-blue-400 text-white"
                                >
                                    {isLike ? "Unlike" : "like"}
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
