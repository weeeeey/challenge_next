import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../libs/useMutaion";

interface FormProp {
    name: string;
    email: string;
}

const SingUp: NextPage = () => {
    const [enter, { data, loading, error }] = useMutation("/api/enter");
    const router = useRouter();
    const { register, handleSubmit } = useForm<FormProp>();
    const onVaild = (form: FormProp) => {
        enter(form);
        router.push("/signin");
    };
    return (
        <div className="m-5">
            <h1 className="font-bold mb-3 text-5xl">Create Account</h1>
            <form className="space-y-3" onSubmit={handleSubmit(onVaild)}>
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
                        {...register("name", { required: true })}
                        type="email"
                    />
                </div>
                <button className="px-2 border-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-offset-2  ">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SingUp;
