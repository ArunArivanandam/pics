import { useState } from "react";

function SearchBar({ handleSubmit }) {
  // state 'term' is initialized with default string 'cars'
  const [term, setTerm] = useState("cars");

  //sets form input value to term(state)
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); //prevents default form submission behavior
    handleSubmit(term); //passes the current term to parent component
    setTerm(""); //clears the input by setting term to empty string
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          // clears the placeholder text(default state) when the field is focused
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
