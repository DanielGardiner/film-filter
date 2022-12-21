"use client";

import Clicky from "./Clicky";

export default function GenreAddForm() {
  const handleSubmit = () => {}

  // TODO: figure out how best to do data mutation in next 13
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="flex justify-between mb-4">
        Genre name
        <input className="border-2 rounded-md border-solid mx-2 border-blue-600" />
      </label>
      <Clicky type="secondary" size="sm">
        Submit
      </Clicky>
    </form>
  );
}
