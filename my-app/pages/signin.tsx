import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../libs/useMutaion";

interface LoginProp {
    email: string;
}
const Login: NextPage = () => {
    const { register, handleSubmit } = useForm<LoginProp>();
    const router = useRouter();

    const onVaild = (form: LoginProp) => {
        router.push("/");
    };
    return (
        <div className="m-5">
            <h1 className="mb-5 font-bold text-5xl">Login</h1>
            <form onSubmit={handleSubmit(onVaild)} className="space-y-3">
                <div>
                    <span>Email: </span>
                    <input
                        {...register("email", { required: true })}
                        className="border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2 "
                        type="email"
                    />
                </div>
                <button className="px-2 border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2  ">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
