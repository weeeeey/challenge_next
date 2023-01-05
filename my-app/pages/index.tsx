import { NextPage } from "next";
import test from "node:test";
import { useForm } from "react-hook-form";

interface FormProps {
    name: string;
    email?: string;
    phone?: number;
}

const Index: NextPage = () => {
    const { register, watch, handleSubmit } = useForm<FormProps>();
    const onVaild = (form: FormProps) => {
        console.log(form);
    };
    return (
        <div className="mt-20 mx-auto w-full h-screen flex flex-col space-y-10 ">
            <h1 className="text-5xl">계정을 생성하세요</h1>
            <form
                className=" flex flex-col space-y-5"
                onSubmit={handleSubmit(onVaild)}
            >
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        {...register("name")}
                        type="text"
                        id="floating_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        {...register("email")}
                        type="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        {...register("phone")}
                        type="number"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Phone number
                    </label>
                </div>
                <button className="border-2 rounded-2xl w-full h-16  text-white bg-blue-500 hover:border-blue-500 hover:outline-none hover:ring-2 hover:ring-offset-2">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Index;
