import IgLogo from "../assets/instagram-svgrepo-com.svg";
import GhLogo from "../assets/github-svgrepo-com.svg";
import LnLogo from "../assets/linkedin-svgrepo-com_(1).svg";
import { Link } from "react-router-dom";

export default function IntroNameHero() {
  return (
    <>
      <div className="mx-auto container bg-hex_FFE090">
        {/* py-28 px-6 */}
        <div className="font-grenzeL300 text-xl font-light leading-tight subpixel-antialiased ">
          hi, welcome
        </div>
        <div className="text-black text-[50px] font-bold leading-[42px] font-grenzeL300">
          <div className="flex flex-row gap-8 justify-center">
            <h1>
              Fathan <br />
              Akbar <br />
              Abdurachman
            </h1>
            <div className="flex flex-col justify-between">
              <Link to={"#"}>
                <img className="h-7 w-7" src={IgLogo} alt="Instagram Logo" />
              </Link>

              <Link to={"#"}>
                <img className="h-7 w-7" src={GhLogo} alt="GitHub Logo" />
              </Link>

              <Link to={"#"}>
                <img className="h-7 w-7" src={LnLogo} alt="LinkedIn Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
