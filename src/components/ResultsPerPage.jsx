import React from "react";
import { useSpacecrafts } from "../contexts/spacecraftsContext";

export default function ResultsPerPage() {
  const { pageSize, dispatch, spacecrafts } = useSpacecrafts();
  const totalElements = spacecrafts[0]?.page.totalElements;

  const isTwenty = pageSize === 20;
  const isThirty = pageSize === 40;
  const isForty = pageSize === 60;

  function updateResultsPerPage(newValue) {
    if (newValue > 20 && newValue > totalElements) {
      return;
    }
    dispatch({
      type: "SET_SPACECRAFT_LIST",
      payload: [],
    });
    dispatch({
      type: "SET_PAGE_NUMBER",
      payload: 0,
    });
    dispatch({
      type: "SET_PAGE_SIZE",
      payload: newValue,
    });
  }

  return (
    <div className="flex items-center">
      {totalElements && (
        <p className="ml-2 text-gray-600 mr-4">
          <strong>{totalElements}</strong> spacecraft found
        </p>
      )}
      <div className="flex border border-primary-dark rounded-md">
        <p
          onClick={() => updateResultsPerPage(20)}
          className={`px-2 py-[2px] cursor-pointer ${
            isTwenty && "text-white bg-primary-dark"
          }`}
        >
          20
        </p>
        <p
          onClick={() => updateResultsPerPage(40)}
          className={`border-r border-l border-primary-dark px-2 py-[2px] cursor-pointer ${
            isThirty && "text-white bg-primary-dark"
          }`}
        >
          40
        </p>
        <p
          onClick={() => updateResultsPerPage(60)}
          className={`px-2 py-[2px] cursor-pointer ${
            isForty && "text-white bg-primary-dark"
          }`}
        >
          60
        </p>
      </div>
      <p className="ml-2 text-gray-600">
        Showing <strong>{pageSize}</strong> results per page
      </p>
    </div>
  );
}
