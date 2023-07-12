import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
            <Link to="/">
                <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
                    NETFLIX
                </h1>
            </Link>

            {user?.email ? (
                <div className="">
                    <Link to="/account">
                        <button className="px-4 py-1">Account</button>
                    </Link>
                    <button
                        onClick={handleLogOut}
                        className="bg-red-600 px-6 py-2 rounded"
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="">
                    <Link to="/login">
                        <button className="px-4 py-1">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-red-600 px-6 py-2 rounded">
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
