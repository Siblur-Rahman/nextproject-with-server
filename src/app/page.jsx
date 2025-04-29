import Image from "next/image";

export default function Home() {
  return (
    <div>
      <form className="flex justify-center items-center mt-9">
        <input
          className="outline-0 bg-transparent border rounded px-4 py-2"
          type="text"
        />
        <button className="bg-indigo-800 px-4 py-2 rounded text-white">
          Add Todo
        </button>
      </form>
      Home Page
    </div>
  );
}
