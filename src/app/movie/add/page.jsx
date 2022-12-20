"use client";

import Clicky from "../../../components/Clicky";

export default function MovieAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie name
        <input className="border-2 rounded-md border-solid mx-2 border-blue-600" />
      </label>
      <Clicky type="secondary" size="sm">Submit</Clicky>
    </form>
  );
}
