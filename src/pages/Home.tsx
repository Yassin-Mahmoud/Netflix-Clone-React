import Main from "../components/Main";
import Row from "../components/Row";

const Home = () => {
    const key = import.meta.env.VITE_API_KEY;

    return (
        <div>
            <Main />
            <Row
                rowId="1"
                title="UpComing"
                fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`}
            />
            <Row
                rowId="2"
                title="Popular"
                fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`}
            />
            <Row
                rowId="3"
                title="Trending"
                fetchURL={`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`}
            />
            <Row
                rowId="4"
                title="Top Rated"
                fetchURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`}
            />
        </div>
    );
};

export default Home;
