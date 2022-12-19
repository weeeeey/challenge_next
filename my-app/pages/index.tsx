import { NextPage } from 'next';

const Index: NextPage = () => {
    return (
        <div className="flex-row justify-center items-center mx-4">
            <h1 className="text-5xl mb-10 font-bold">Weather</h1>
            <div className="space-y-5 mb-10">
                <div className=" w-full h-20 border-2 border-black shadow-md border-b-4 bg-white text-black rounded-xl flex justify-between items-center ">
                    <div className="ml-4 flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">Casius</div>
                        <div className="font-medium text-sm">Mars, 12AM</div>
                    </div>
                    <div className="mr-4 flex items-center">
                        <svg
                            className="w-full h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <div className="font-bold text-4xl"> 85&#186;</div>
                    </div>
                </div>
                <div className=" w-full h-20 border-2 border-black shadow-md border-b-4 bg-yellow-400 text-black rounded-xl flex justify-between items-center ">
                    <div className="ml-4 flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">Casius</div>
                        <div className="font-medium text-sm">Mars, 12AM</div>
                    </div>
                    <div className="mr-4 flex items-center">
                        <svg
                            className="w-full h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <div className="font-bold text-4xl"> 85&#186;</div>
                    </div>
                </div>
                <div className=" w-full h-20 border-2 border-black shadow-md border-b-4 bg-green-400 text-black rounded-xl flex justify-between items-center ">
                    <div className="ml-4 flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">Casius</div>
                        <div className="font-medium text-sm">Mars, 12AM</div>
                    </div>
                    <div className="mr-4 flex items-center">
                        <svg
                            className="w-full h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <div className="font-bold text-4xl"> 85&#186;</div>
                    </div>
                </div>
                <div className=" w-full h-20 border-2 border-black shadow-md border-b-4 bg-orange-600 text-black rounded-xl flex justify-between items-center ">
                    <div className="ml-4 flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">Casius</div>
                        <div className="font-medium text-sm">Mars, 12AM</div>
                    </div>
                    <div className="mr-4 flex items-center">
                        <svg
                            className="w-full h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <div className="font-bold text-4xl"> 85&#186;</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button>
                    <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Index;
