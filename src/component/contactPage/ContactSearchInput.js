import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ContactPopUp } from "./modal/ContactPopUp";

export const ContactSearchInput = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm) {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.place.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setQuery(location.name);
    setFilteredData([]);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="ContactSearchInput__Container">
      <form
        className="Contact__InputContainer"
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchIcon className="Contact__InputContainer--icon" />
        <input
          type="text"
          placeholder="Search by Places, or Church name..."
          value={query}
          onChange={handleChange}
          className="Contact__InputContainer--input"
        />
      </form>

      {filteredData.length > 0 && (
        <div className="Contact__SearchResults">
          {filteredData.map((location) => (
            <div
              key={location.id}
              className="Contact__SearchResultItem"
              onClick={() => handleSelectLocation(location)}
            >
              {location.name} - {location.place}
            </div>
          ))}
        </div>
      )}

      {selectedLocation && (
        <ContactPopUp
          location={selectedLocation}
          onClose={handleCloseModal}
          className="Sample"
        />
      )}
    </div>
  );
};
