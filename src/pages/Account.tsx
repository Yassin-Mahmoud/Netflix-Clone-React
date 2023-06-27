import SavedMovies from "../components/SavedMovies";

const Account = () => {
    return (
        <>
            <div className="w-full">
                <img
                    className="w-full h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/a5f80c3e-96b4-4c6d-9b35-8be7f5a45bed/EG-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt=""
                />
                <div className="bg-black/60 w-full h-[550px] fixed top-0 left-0"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        My Movies
                    </h1>
                </div>
                <SavedMovies />
            </div>
        </>
    );
};

export default Account;
