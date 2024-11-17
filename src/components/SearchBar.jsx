import { useState } from "react";

function SearchBar({ handleSubmit }) {
  const [term, setTerm] = useState("cars");

  //sets input value to term(state)
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  //passes the input(from state) to the parent handleSubmit function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(term);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          // clears the placeholder text when the field is in foucs
          onFocus={() => setTerm("")}
        />
        {/* conditional rendering */}
        {term.length < 3 && "Input must be longer"}
        <p>Your input: {term}</p>
      </form>
    </div>
  );
}

export default SearchBar;
