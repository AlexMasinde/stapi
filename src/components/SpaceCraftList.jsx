import React from "react";
import { useSpacecrafts } from "../contexts/spacecraftsContext";

import SpaceCraftCard from "./SpaceCraftCard";

export default function SpaceCraftList() {
  const { spacecrafts, pageNumber, loading, error } = useSpacecrafts();
  const spacecraftsToDisplay = spacecrafts[pageNumber];

  return (
    <div className="w-[1200px] mx-auto mb-8">
      {loading && (
        <div className="mt-[50px] text-center">
          <p className="font-semibold text-primary-dark">Loading...</p>
        </div>
      )}
      {!loading && error && (
        <div className="mt-[50px] text-center">
          <p className="font-semibold text-primary-dark">{error}</p>
        </div>
      )}

      {!loading && !error && spacecraftsToDisplay && (
        <div className="w-[100%] mx-auto grid grid-cols-4 border border-primary-dark py-4 rounded-md">
          {spacecraftsToDisplay?.spacecrafts.map((spacecraft) => (
            <SpaceCraftCard key={spacecraft.uid} spacecraft={spacecraft} />
          ))}
        </div>
      )}

      {!loading && !error && !spacecraftsToDisplay && (
        <div className="mt-[50px] text-center">
          <p className="font-semibold text-primary-dark">
            No spacecraft to display
          </p>
        </div>
      )}
    </div>
  );
}
