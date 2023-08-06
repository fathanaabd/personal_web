import IntroNameHero from "../components/IntroNameHero";
import ImAn from "../components/ImAn";
import SkillsHero from "../components/SkillsHero";
import { useMediaQuery } from "react-responsive";
import ProjectsHero from "../components/ProjectsHero";
import { Link } from "react-router-dom";

export default function App() {
  const is_DesktopLaptop = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return (
    <>
      {is_DesktopLaptop ? (
        <div className="flex flex-row justify-around ">
          <div className="bg-hex_FFE090 w-full">
            <IntroNameHero />
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-gray-700">
              <ImAn />
            </div>
            <div className="bg-gray-600">
              <SkillsHero />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-around ">
          <div className="bg-hex_FFE090 w-full">
            <IntroNameHero />
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-gray-500 ">
              <ImAn />
            </div>
            <div className="bg-gray-600">
              <SkillsHero />
            </div>
          </div>
        </div>
      )}

      {is_DesktopLaptop ? (
        <div className="p-10 bg-neutral-50">
          <div className="container mx-auto max-w-7xl ">
            <div className="text-left text-black font-grenzeL300 leading-relaxed tracking-normal antialiased font-bold text-[20px] pt-4">
              <Link to={"#"}>list of project</Link>
            </div>

            <div className="flex flex-row gap-12">
              <div>
                <ProjectsHero
                  title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  enim rerum harum qui, pariatur."
                />

                <ProjectsHero
                  title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  enim rerum harum qui, pariatur."
                />
              </div>

              <div>
                <ProjectsHero
                  title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  enim rerum harum qui, pariatur."
                />

                <ProjectsHero
                  title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  enim rerum harum qui, pariatur."
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-10 bg-neutral-50">
          <div className="container mx-auto max-w-2xl">
            <Link to={"#"}>
              <div className="text-left text-black font-grenzeL300 leading-relaxed tracking-normal antialiased font-bold text-[20px] pt-4">
                list of project
              </div>
            </Link>
          </div>

          <ProjectsHero
            title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                enim rerum harum qui, pariatur."
          />

          <ProjectsHero
            title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                enim rerum harum qui, pariatur."
          />

          <ProjectsHero
            title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                enim rerum harum qui, pariatur."
          />

          <ProjectsHero
            title="Projects 1 | Lorem ipsum dolor sit amet consectetur"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                enim rerum harum qui, pariatur."
          />
        </div>
      )}
    </>
  );
}
