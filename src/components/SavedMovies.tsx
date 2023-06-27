import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.config";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

export interface SingleMovie {
    id: string;
    title: string;
    backdrop_path: string;
    img: React.ReactNode;
}

const SavedMovies = () => {
    const [movies, setMovies] = useState<SingleMovie[]>([]);
    const { user } = UserAuth();

    const slideLeft = () => {
        const slider: HTMLElement | null = document.getElementById("slider");
        slider ? (slider.scrollLeft = slider.scrollLeft - 500) : null;
    };

    const slideRight = () => {
        const slider: HTMLElement | null = document.getElementById("slider");
        slider ? (slider.scrollLeft = slider.scrollLeft + 500) : null;
    };

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies);
        });
    }, [user?.email]);

    const movieRef = doc(db, "users", `${user?.email}`);
    const deleteMovie = async (id: string) => {
        try {
            const result = movies.filter((item) => item.id !== id);
            await updateDoc(movieRef, {
                savedMovies: result,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* Slider title */}
            <h2 className="font-bold md:text-xl p-4">Saved Movies</h2>

            {/* Slider container */}
            <div className="relative flex items-center group">
                {/* Slider left button */}
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className="bg-white rounded-full absolute opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"
                />

                {/* Slider */}
                <div
                    id={"slider"}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((item: SingleMovie, id) => (
                        <div
                            key={id}
                            className="w-[160px] sm:w-[240px] lg:w-[280] inline-block cursor-pointer relative p-2"
                        >
                            <img
                                className="w-full h-auto block"
                                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                                alt={item?.title}
                            />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100">
                                <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                    {item?.title}
                                </p>
                                <p
                                    onClick={() => {
                                        deleteMovie(item.id);
                                    }}
                                    className="absolute text-gray-300 top-4 right-4"
                                >
                                    <AiOutlineClose />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider right button */}
                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 text-black cursor-pointer z-10 hidden group-hover:block"
                />
            </div>
        </>
    );
};

export default SavedMovies;
