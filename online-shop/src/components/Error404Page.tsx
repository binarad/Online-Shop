import { Link } from "react-router-dom";
import Header from "./Header";

export default function Error404Page() {
  return (
    <div className="w-full ">
      <Header />
      <div className="flex items-center w-full justify-center text-3xl flex-col gap-4 p-10">
        <h1 className=""> Error 404 not found </h1>
        <Link to="/">
          <button className="bg-black text-2xl p-2 text-white m-4 hover:bg-gray-700">
            Back to the Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}
