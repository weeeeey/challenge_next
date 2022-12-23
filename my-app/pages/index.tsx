import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
    name: string;
    email: string;
    password: string;
}

const Index: NextPage = () => {
    const [success, setSuccess] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormProps>({
        defaultValues: { name: "", email: "", password: "" },
        mode: "onChange",
    });
    const onVaild = (form: FormProps) => {
        setSuccess("Thank you!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onVaild)} className="space-y-2 mt-2">
                <div className="flex items-center space-x-2">
                    <span>Name: </span>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        className="border-2 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-offset-2 "
                    />
                    {watch("name") ? null : (
                        <span>please write down your name</span>
                    )}
                </div>
                <div>
                    <span>Email:</span>
                    <input
                        {...register("email", {
                            required: true,
                            validate: {
                                requireNaver: (value) =>
                                    value.includes("@naver.com") ||
                                    "You write down @naver.com",
                            },
                        })}
                        className="border-2 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-offset-2 "
                        type="email"
                        placeholder="Only @naver.com"
                    />
                    {watch("email") ? (
                        errors.email?.message
                    ) : (
                        <span>please write down your email</span>
                    )}
                </div>
                <div>
                    <span>Password:</span>
                    <input
                        {...register("password", {
                            required: "please write down your password",
                            minLength: {
                                value: 10,
                                message:
                                    "Password has to be more than 10 chars ",
                            },
                        })}
                        className="border-2 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-offset-2 "
                        type="password"
                        placeholder="Min 10Characters"
                    />
                    {watch("password") ? (
                        errors.password ? (
                            <span>{errors.password.message}</span>
                        ) : null
                    ) : (
                        <span>please write down your password</span>
                    )}
                </div>
                <button className="py-1 px-3  border rounded-md bg-slate-300 focus:outline-none focus:bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    Log in
                </button>
                <div>{success}</div>
            </form>
        </div>
    );
};

export default Index;
