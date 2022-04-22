import React from "react";
import { useSpacecrafts } from "../contexts/spacecraftsContext";

export default function PageNavigation() {
  const { dispatch, pageNumber, spacecrafts } = useSpacecrafts();
  const totalPages = spacecrafts[0]?.page.totalPages;

  const isFirstPage = pageNumber === 0;
  const isLastPage = pageNumber === totalPages - 1;

  function nextPage() {
    if (!isLastPage) {
      dispatch({
        type: "SET_PAGE_NUMBER",
        payload: pageNumber + 1,
      });
    }
  }

  function previousPage() {
    if (!isFirstPage) {
      dispatch({
        type: "SET_PAGE_NUMBER",
        payload: pageNumber - 1,
      });
    }
  }

  return (
    <div className="flex w-[fit-content]">
      <button
        disabled={isFirstPage}
        onClick={previousPage}
        className="rounded-l-md text-white bg-primary-dark px-4"
      >
        Prev Page
      </button>
      <p className="px-4 border-t border-b border-primary-dark">
        Page {pageNumber + 1} of {totalPages ?? 1}
      </p>
      <button
        disabled={isLastPage}
        onClick={nextPage}
        className="rounded-r-md text-white bg-primary-dark px-4"
      >
        Next Page
      </button>
    </div>
  );
}
