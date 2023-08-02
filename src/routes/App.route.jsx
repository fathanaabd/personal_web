import { Link, Outlet } from "react-router-dom";
import IntroNameHero from "../components/IntroNameHero";
import ImAn from "../components/ImAn";

const data = {
  firstname: "Fathan",
  lastname: "Akbar",
};

export default function App() {
  return (
    <>
      <div className="bg-hex_FFE090 px-6">
        <IntroNameHero />
      </div>
      <div className="bg-hex_9A6F00">
        <ImAn />
      </div>
    </>
  );
}
