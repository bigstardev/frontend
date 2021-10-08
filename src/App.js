import { useState } from "react"
import Search from "./components/Search";
import useFetch from "./hooks/useFetch";
import NotFound from "./components/NotFound"
import Movie from "./components/Movie";
function App() {
    const [searchValue, setSearchValue] = useState("");
    const defaultUrl = `http://www.omdbapi.com/&apikey=922db138&`
    const updateQuery = (title) => {
        let url = `http://www.omdbapi.com/?apikey=922db138&t=${title}&`;
        return url
    };
    const searchMovie = () => {
        let updatedUrl = updateQuery(searchValue)
        console.log("updatedUrl", updatedUrl)
        setUrl(updatedUrl)
    }
    const { data, isLoading, isError, setUrl } = useFetch(defaultUrl);
    {/* search by title is optional in API,
     so use data.Response
    */}
    const isMovieNotFound = data.Response === "False" || isError
    const isMovieLoaded = !isLoading && !isError && data.Response === "True"
    return (
        <>
            <div className="search" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Search title={searchValue} changeTitle={e => setSearchValue(e.target.value)} />
                <button onClick={() => searchMovie()} >search</button>
            </div>
            <div className="movie" style={{ marginTop: "20px" }}>
                {isMovieNotFound && <NotFound />}
                {isMovieLoaded && < Movie movie={data} />}
            </div>

        </>

    );
}

export default App;
