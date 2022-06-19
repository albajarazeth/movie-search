import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import Cards from "../Components/Cards";

export default function Main({ request, getMovie, data, movie }) {
  return (
    <div className="app-container">
      <div className="app-content">
        <SearchBar request={request} />
        <div className="movies-container">
          {data.length !== 0 && <Cards getMovie={getMovie} data={data} />}
        </div>
      </div>
    </div>
  );
}
