import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";

interface FormProp {
    login: string;
    name: string;
    email: string;
}
interface EnterProp {
    ok: boolean;
}
const Index: NextPage = () => {
    const router = useRouter();
    const [enter, { data, loading }] = useMutation<EnterProp>("/api/enter");

    const { register, handleSubmit } = useForm<FormProp>();
    const onVaild = () => {
        router.push("/profile");
    };
    const onEnterVaild = (form: FormProp) => {
        if (loading) return;
        enter(form);
    };
    return (
        <div className="m-5">
            {data?.ok ? (
                <>
                    <h1 className="mb-5 font-bold text-5xl">Login</h1>
                    <form
                        onSubmit={handleSubmit(onVaild)}
                        className="space-y-3"
                    >
                        <div>
                            <span>Email: </span>
                            <input
                                {...register("login", { required: true })}
                                className="border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2 "
                                type="email"
                            />
                        </div>
                        <button className="px-2 border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2  ">
                            Login
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h1 className="font-bold mb-3 text-5xl">Create Account</h1>
                    <form
                        className="space-y-3"
                        onSubmit={handleSubmit(onEnterVaild)}
                    >
                        <div>
                            <span>Name: </span>
                            <input
                                className="border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2 "
                                {...register("name", { required: true })}
                                type="text"
                            />
                        </div>
                        <div>
                            <span>Email: </span>
                            <input
                                className="border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2 "
                                {...register("email", { required: true })}
                                type="email"
                            />
                        </div>
                        <button className="px-2 border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2  ">
                            Create Account
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Index;
