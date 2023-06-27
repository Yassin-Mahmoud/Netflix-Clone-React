import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";

interface Rows {
    title: string;
    fetchURL: string;
    rowId: string;
}

export interface SingleMovie {
    id: string;
    title: string;
    backdrop_path: string;
}

const Row: React.FC<Rows> = (Rows) => {
    const [movies, setMovies] = useState<SingleMovie[]>([]);

    // Fetching movies for sliders
    const getMovies = async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        console.log(movies);
    };

    // Slider Functions
    const slideLeft = () => {
        const slider: HTMLElement | null = document.getElementById(
            "slider" + Rows.rowId
        );
        slider ? (slider.scrollLeft = slider.scrollLeft - 500) : null;
    };

    const slideRight = () => {
        const slider: HTMLElement | null = document.getElementById(
            "slider" + Rows.rowId
        );
        slider ? (slider.scrollLeft = slider.scrollLeft + 500) : null;
    };

    useEffect(() => {
        getMovies(Rows.fetchURL);
    });

    return (
        <>
            {/* Slider title */}
            <h2 className="font-bold md:text-xl p-4">{Rows.title}</h2>

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
                    id={"slider" + Rows.rowId}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((item, id) => (
                        <Movie item={item} key={id} />
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

export default Row;
