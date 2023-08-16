import IgLogo from "../assets/instagram-svgrepo-com.svg"
import GhLogo from "../assets/github-svgrepo-com.svg"
import LnLogo from "../assets/linkedin-svgrepo-com_(1).svg"
import { Link } from "react-router-dom";

export default function IntroNameHero() {
  return (
    <>
      <div className="mx-auto container py-28 px-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-grenzeL300 text-xl text-black font-light leading-tight subpixel-antialiased ">
            hi, welcome
          </h1>
          <div className="text-black text-[50px] font-bold leading-[42px] font-grenzeL300">
            <div className="flex flex-row gap-8">
              <h1>Fathan <br/>Akbar <br/>Abdurachman</h1>
              <div className="w-7 flex flex-col justify-between">
                <Link to={"#"}>
                  <img src={IgLogo} alt="Instagram Logo"  />
                </Link>
                
                <Link to={"#"}>
                  <img src={GhLogo} alt="GitHub Logo" />
                </Link>

                <Link to={"#"}>
                  <img src={LnLogo} alt="LinkedIn Logo"/>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
