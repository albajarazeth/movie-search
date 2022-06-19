import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ data, getMovie }) => {
  const array = data.data.Search;

  let display;

  if (!data.data.Error) {
    display = array.map((el) => {
      return (
        <Link key={el.imdbID} to={`/details/${el.imdbID}`}>
          <div
            onClick={() => getMovie(el.Title, el.imdbID)}
            className="card-container"
          >
            <div className="card-content">
              <img
                className="picture"
                src={
                  el.Poster === "N/A"
                    ? "https://www.azendportafolio.com/static/img/not-found.png"
                    : el.Poster
                }
              />
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = <h1>Movie Not Found</h1>;
  }

  return <div className="grid-container">{display}</div>;
};

export default Cards;
