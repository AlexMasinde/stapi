import React, { useState } from "react";
import { useSpacecrafts } from "../contexts/spacecraftsContext";

export default function SearchSpaceCrafts() {
  const { dispatch, loading } = useSpacecrafts();

  const [searchText, setSearchText] = useState("");
  const [searching, setSearching] = useState(false);

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  function handleSearch() {
    if (searching) {
      setSearchText("");
      dispatch({
        type: "SET_SEARCH_TERM",
        payload: "",
      });
      dispatch({
        type: "SET_SPACECRAFT_LIST",
        payload: [],
      });
      setSearching(false);
      return;
    }
    if (!searchText) return;
    dispatch({
      type: "SET_SPACECRAFT_LIST",
      payload: [],
    });
    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: 0,
    });
    dispatch({
      type: "SET_METHOD",
      payload: "POST",
    });

    dispatch({
      type: "SET_SEARCH_TERM",
      payload: searchText,
    });
    setSearching(true);
  }

  return (
    <div className="w-[1200px] mx-auto mb-4">
      <input
        className="outline-none px-2 py-1 border border-primary-dark rounded-md"
        type="text"
        placeholder="Search Spacecraft"
        onChange={handleSearchText}
        value={searchText}
      />
      <button
        disabled={loading}
        onClick={handleSearch}
        className="rounded-md text-white bg-primary-dark px-2 py-1 ml-4"
      >
        {searching ? "Clear" : loading ? "Loading.." : "Search Spacecraft"}
      </button>
    </div>
  );
}
