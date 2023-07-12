import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/a5f80c3e-96b4-4c6d-9b35-8be7f5a45bed/EG-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt=""
                />
                <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[500px] mx-auto rounded bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col py-7"
                            >
                                <input
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setEmail(e.target.value);
                                    }}
                                    className="p-3 my-2 rounded bg-gray-600"
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="p-3 my-2 rounded bg-gray-600"
                                    type="password"
                                    placeholder="Password"
                                />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                                    Sign Up
                                </button>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <p>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                        />{" "}
                                        Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-6">
                                    <span className="text-gray-600 text-sm mr-2">
                                        Already subscribed to Netflix?
                                    </span>
                                    <Link to="/login">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
