import { NextPage } from "next";

const Friends: NextPage = () => {
    return (
        <div className="space-y-6 flex flex-col items-center w-full bg-yellow-400 h-[100vh]">
            <div className="mt-10 flex items-center justify-center text-5xl mb-10 font-bold">
                <svg
                    className="w-12 h-12 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                </svg>
                <h1 className="w-96 text-center">Frineds</h1>
            </div>
            <form className="relative w-full flex items-center justify-center">
                <input
                    className="font-medium text-2xl w-full h-14 px-4 border-2 rounded-xl border-black border-b-4 mx-12"
                    type="text"
                    placeholder="Search with love..."
                />
                <svg
                    className="absolute w-12 h-12 text-gray-400 inset-y-0 pr-1.5 right-0 mr-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </form>
            <div className="flex flex-col w-full space-y-6 ">
                <div className="flex justify-center items-center h-20 bg-white mx-12 border-2 border-black rounded-xl">
                    <div className="bg-red-400 w-14 h-14 rounded-full ml-4"></div>
                    <div className="flex flex-col w-72 ml-4">
                        <span className="font-bold text-3xl">Bill Rizer</span>
                        <span className="font-medium text-lg text-gray-400">
                            asdasd
                        </span>
                    </div>
                    <button className="bg-yellow-400 mr-4 rounded-xl w-20 h-10 border-2 border-black">
                        invite
                    </button>
                </div>
                <div className="flex justify-center items-center h-20 bg-white mx-12 border-2 border-black rounded-xl">
                    <div className="bg-red-400 w-14 h-14 rounded-full ml-4"></div>
                    <div className="flex flex-col w-72 ml-4">
                        <span className="font-bold text-3xl">Bill Rizer</span>
                        <span className="font-medium text-lg text-gray-400">
                            asdasd
                        </span>
                    </div>
                    <button className="bg-yellow-400 mr-4 rounded-xl w-20 h-10 border-2 border-black">
                        invite
                    </button>
                </div>
                <div className="flex justify-center items-center h-20 bg-white mx-12 border-2 border-black rounded-xl">
                    <div className="bg-red-400 w-14 h-14 rounded-full ml-4"></div>
                    <div className="flex flex-col w-72 ml-4">
                        <span className="font-bold text-3xl">Bill Rizer</span>
                        <span className="font-medium text-lg text-gray-400">
                            asdasd
                        </span>
                    </div>
                    <button className="bg-black mr-4 rounded-xl w-24 h-10 border-2 text-white">
                        invited
                    </button>
                </div>
                <div className="flex justify-center items-center h-20 bg-white mx-12 border-2 border-black rounded-xl">
                    <div className="bg-red-400 w-14 h-14 rounded-full ml-4"></div>
                    <div className="flex flex-col w-72 ml-4">
                        <span className="font-bold text-3xl">Bill Rizer</span>
                        <span className="font-medium text-lg text-gray-400">
                            asdasd
                        </span>
                    </div>
                    <button className="bg-yellow-400 mr-4 rounded-xl w-20 h-10 border-2 border-black">
                        invite
                    </button>
                </div>
                <div className="flex justify-center items-center h-20 bg-white mx-12 border-2 border-black rounded-xl">
                    <div className="bg-red-400 w-14 h-14 rounded-full ml-4"></div>
                    <div className="flex flex-col w-72 ml-4">
                        <span className="font-bold text-3xl">Bill Rizer</span>
                        <span className="font-medium text-lg text-gray-400">
                            asdasd
                        </span>
                    </div>
                    <button className="bg-yellow-400 mr-4 rounded-xl w-20 h-10 border-2 border-black">
                        invite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Friends;
