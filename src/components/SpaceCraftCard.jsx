import React from "react";

export default function SpaceCraftCard({ spacecraft }) {
  const {
    name,
    registry,
    status,
    operator,
    owner,
    spacecraftClass,
    dateStatus,
  } = spacecraft;

  return (
    <div className="text-center border border-primary-dark py-6 w-[fit-content] mx-auto px-4 mb-4 rounded-md min-w-[260px] max-w-[260px]">
      {name && (
        <p className="font-semibold text-primary-dark text-md mb-1">
          <span>Name: </span>
          {name}
        </p>
      )}
      {dateStatus && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Date Status: </span>
          {dateStatus}
        </p>
      )}
      {registry && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Title: </span>
          {registry}
        </p>
      )}
      {status && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Status: </span>
          {status}
        </p>
      )}
      {operator && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Operator: </span>
          {operator.name}
        </p>
      )}
      {owner && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Owner: </span>

          {owner.name}
        </p>
      )}
      {spacecraftClass && (
        <p className="text-sm text-gray-400 mt-4">
          <span>Spacecraft Class: </span>
          {spacecraftClass.name}
        </p>
      )}
    </div>
  );
}
