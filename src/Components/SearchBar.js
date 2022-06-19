import "./SearchBar.css";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ request }) => {
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onInputCHange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={onInputCHange}
      />
      <button
        className="submit-btn"
        onClick={() => {
          term.length !== 0 ? request(term) : alert("Enter a value!");
        }}
      >
        {" "}
        <AiOutlineSearch />{" "}
      </button>
    </form>
  );
};
export default SearchBar;
