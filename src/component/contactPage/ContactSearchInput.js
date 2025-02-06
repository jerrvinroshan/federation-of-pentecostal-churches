import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export const ContactSearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form className="Contact__InputContainer" onSubmit={handleSubmit} >
      <SearchIcon className="Contact__InputContainer--icon"/>
      <input
        type="text"
        placeholder="Search by Places, or Church name..."
        value={query}
        onChange={handleChange}
        className="Contact__InputContainer--input"
      />
    </form>
  );
};
