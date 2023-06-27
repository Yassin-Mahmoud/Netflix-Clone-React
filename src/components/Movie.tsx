import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { SingleMovie } from "./Row";

interface MovieProps {
    item: SingleMovie;
}

const Movie: React.FC<MovieProps> = ({ item }) => {
    const [like, setLike] = useState<boolean>(false);
    const { user } = UserAuth();
    const movieId = doc(db, "users", `${user?.email}`);

    const saveMovie = async () => {
        if (user?.email) {
            setLike(!like);
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                }),
            });
        } else {
            alert("Please log in to save a movie");
        }
    };

    return (
        <>
            <div className="w-[160px] sm:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2">
                <img
                    className="w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
                    <p onClick={saveMovie}>
                        {like ? (
                            <FaHeart className="absolute top-3.5 left-3.5 text-gray-400" />
                        ) : (
                            <FaRegHeart className="absolute top-3.5 left-3.5 text-gray-400" />
                        )}
                    </p>
                    <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                        {item?.title}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Movie;
