"use client";

import Clicky from "./Clicky";

export default function MovieAdd({ genres }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="flex justify-between mb-4">
        Movie name
        <input className="border-2 rounded-md border-solid mx-2 border-blue-600" />
      </label>
      <label className="flex justify-between mb-4">
        Overview
        <input className="border-2 rounded-md border-solid mx-2 border-blue-600" />
      </label>
      <label className="flex justify-between mb-4">
        Genre
        <select>
          <option value="">Please select...</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </label>
      <Clicky type="secondary" size="sm">
        Submit
      </Clicky>
    </form>
  );
}
