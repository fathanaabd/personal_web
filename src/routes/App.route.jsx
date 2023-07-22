import { Link, Outlet, useLoaderData } from "react-router-dom";
import getAllPortofolio from "../data/firebaseConnector";

export async function loader(){
  const p = await getAllPortofolio
  return {p}
}

export default function App() {
  const {porto} = useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-bold">React starter</h1>
      <h3 className="text-2xl font-light">
        Vite, React, TailwindCSS, Prettier + ESLint, Firebase
        Hosting+RealtimeDatabase
      </h3>
      <Link to={"/portos/1"}>My Projects</Link>
      <nav className="text-2xl">
        {porto}
      </nav>
      <Outlet />
    </>
  );
}
