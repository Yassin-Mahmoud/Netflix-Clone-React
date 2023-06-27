import { useEffect, useState } from "react";

interface SingleMovie {
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
}

const Main = () => {
    const [movies, setMovies] = useState([]);
    const key = import.meta.env.VITE_API_KEY;
    const movie: SingleMovie =
        movies[Math.floor(Math.random() * movies.length)];

    const getMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    const truncateString = (str: string, num: number) => {
        return str?.length > num ? str.slice(0, num) + "..." : str;
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(movie);

    return (
        <div className="w-full h-[550px]">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>

                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        {movie?.title}
                    </h1>
                    <div className="my-5">
                        <button className="border bg-gray-300 text-black border-grey py-2 px-5">
                            Play
                        </button>
                        <button className="border text-white border-grey py-2 px-5 ml-4">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                        Released: {movie?.release_date}
                    </p>
                    <p className="lg:w-6/12 xl:w-4/12 text-gray-300">
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
