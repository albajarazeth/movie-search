import "./App.css";
import axios from "axios";
import { useState } from "react";
import Main from "./Pages/Main";
import Details from "./Pages/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  const KEY = "d6333300";
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [error, setError] = useState();

  async function fetchData(query) {
    const config = {
      method: "get",
      baseURL: `http://www.omdbapi.com/?apikey=${KEY}&`,
      params: {
        s: `${query}`,
      },
    };

    const response = await axios(config);
    setMovies(response);
    console.log(movies);
  }

  async function getMovie(x, id) {
    const config = {
      method: "GET",
      baseURL: `http://www.omdbapi.com/?apikey=${KEY}&`,
      params: {
        // t : `${x}`,
        plot: "full",
        i: `${id}`,
      },
    };

    const res = await axios(config);
    setMovie(res);
  }

  const Err = () => {
    return <h2 className="err">Error 404: Not found</h2>;
  };

  return (
    <>
      <nav>
        <h1 className="main-heading">Movie Search</h1>
      </nav>
      <Routes>
        <Route
          path="/movie-search"
          element={
            <Main
              request={fetchData}
              getMovie={getMovie}
              data={movies}
              movie={movie}
            />
          }
        />
        <Route path="/details/:id" element={<Details movie={movie} />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </>
  );
}

export default App;
