import "./Card.css";
import { useState } from "react";

const Card = ({ movie }) => {
  return (
    <section>
      {movie && (
        <div className="info-container">
          <div key={movie.data.imdbID} className="info-content">
            <img className="info-iamge" src={movie.data.Poster} />
            <div className="info-text">
              <h1>
                {movie.data.Title} ({movie.data.Year})
              </h1>
              <p>
                {" "}
                <span className="info-heading"></span> {movie.data.Plot}
              </p>
              <p>
                {" "}
                <span className="info-heading">Cast</span> {movie.data.Actors}
              </p>
              <p>
                {" "}
                <span className="info-heading">Runtime</span>{" "}
                {movie.data.Runtime}
              </p>
              <p>
                {" "}
                <span className="info-heading">Genre</span> {movie.data.Genre}
              </p>
              <p>
                {" "}
                <span className="info-heading">Rated</span> {movie.data.Rated}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
