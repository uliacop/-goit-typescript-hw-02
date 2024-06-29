import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(inputValue);
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div className={css.inputStyle}>
          <button type="submit" className={css.serachBtn}>
            <CiSearch />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
      <Toaster /> {/* This will render the toast notifications */}
    </header>
  );
};

export default SearchBar;
