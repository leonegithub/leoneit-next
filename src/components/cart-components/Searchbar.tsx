import React from "react";

import "./searchbar-cart.css";
import { useParams } from "next/navigation";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange,  }) => {
  const params = useParams();
  const lang = params?.lang as string | undefined;

  return (
    <div
      className="input-group searchbar flex items-center"
      style={{
        marginBottom: "50px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="searchbar focus:ring-0"
        placeholder={lang === "it" ? "Cerca..." : "Search..."}
      />
      <div id="lens">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;
