"use client";
import { useRouter } from "next/navigation";
import Clicky from "./Clicky";

export default function GenreAddForm() {
  const router = useRouter();

  // TODO: figure out how best to do data mutation in next 13
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    try {
      await fetch("/api/genre", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
      router.refresh();
    } catch(e) {
      // Handle error
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label className="flex justify-between mb-4">
        Genre name
        <input
          className="border-2 rounded-md border-solid mx-2 border-blue-600"
          name="name"
        />
      </label>
      <Clicky type="secondary" size="sm">
        Submit
      </Clicky>
    </form>
  );
}
