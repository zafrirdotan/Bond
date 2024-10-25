import { memo, useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = memo(function SearchBar({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    onValueChange(debouncedTerm);
  }, [debouncedTerm]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>🔍</button>
    </div>
  );
});

export default SearchBar;
