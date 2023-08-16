import IntroNameHero from "../components/IntroNameHero";
import ImAn from "../components/ImAn";
import SkillsHero from "../components/SkillsHero";
import { useMediaQuery } from "react-responsive";
import ProjectsHero from "../components/ProjectsHero";
import { Link } from "react-router-dom";
import EmployeeExp from "../components/EmployeeExp";
import Footer from "../components/Footer";
import R_arr from "../assets/right-arrow-svgrepo-com.svg"

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
          <div className="bg-hex_FFE090 w-full ">
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
        <div className="p-10 bg-neutral-100">
          <div className="container mx-auto max-w-2xl">
            <div className="text-left text-black font-grenzeL300 leading-relaxed tracking-normal antialiased font-bold text-[20px] pt-4">
              <Link to={"#"}>
              <div className="flex flex-row gap-3 opacity-100 hover:opacity-80">
                <span className="text-[22px] antialiased w-auto h-auto">list of project</span>
                <img className="w-3.5  h-auto " src={R_arr} alt="Right Arrow"/>
              </div>
              </Link>
            </div>
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

      {is_DesktopLaptop ? (
        <div>
          <div className="p-10 bg-neutral-200">
            <div className="container mx-auto max-w-5xl">
              <div className="text-left text-black font-grenzeL300 leading-relaxed tracking-normal antialiased font-bold text-[20px] pt-4">
                <Link to={"$"}>employment experiences</Link>
              </div>
              <div>
                <EmployeeExp
                  corpName={"PT. Eigen Tri Mathema"}
                  title={"Web Developer"}
                  period={"2000 - present"}
                  desc={[
                    "Developed and maintained responsive and user-friendly websites using HTML, CSS, and JavaScript.",
                    "Collaborated with cross-functional teams, including UX/UI designers and backend developers, to translate wireframes and design mockups into fully functional web interfaces.",
                    "Conducted thorough testing and debugging, including user acceptance testing (UAT), to ensure optimal website performance, usability, and accessibility compliance.",
                  ]}
                />

                <EmployeeExp
                  corpName={"PT. Eigen Tri Mathema"}
                  title={"Web Developer"}
                  period={"2000 - present"}
                  desc={[
                    "Designed and implemented dynamic and interactive web applications using modern JavaScript frameworks like React and Angular, adhering to best practices and design patterns.",
                    "Utilized RESTful APIs and GraphQL to fetch, update, and display data, creating highly responsive and data-driven user interfaces.",
                    "Actively participated in code reviews, provided constructive feedback to team members, and enforced coding standards and code quality guidelines.",
                  ]}
                />

                <EmployeeExp
                  corpName={"PT. Eigen Tri Mathema"}
                  title={"Web Developer"}
                  period={"2000 - present"}
                  desc={[
                    "Led the end-to-end development of a scalable e-commerce platform, ensuring robust security measures and implementing features such as user authentication, authorization, and payment gateways.",
                    "Implemented server-side rendering (SSR) and client-side optimization techniques for improved SEO, page load times, and overall user experience, resulting in a 30% increase in organic traffic and higher conversion rates.",
                    "Conducted thorough performance optimization and refactoring of legacy code to enhance website speed, scalability, and maintainability, contributing to a 25% reduction in page loading time.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="p-10 bg-neutral-200">
            <div className="container mx-auto max-w-2xl">
              <div className="text-left text-black font-grenzeL300 leading-relaxed tracking-normal antialiased font-bold text-[20px] pt-4">
                <Link to={"$"}>employee experiences</Link>
              </div>
              <EmployeeExp
                corpName={"PT. Eigen Tri Mathema"}
                title={"Web Developer"}
                period={"2000 - present"}
                desc={[
                  "Developed and maintained responsive and user-friendly websites using HTML, CSS, and JavaScript.",
                  "Collaborated with cross-functional teams, including UX/UI designers and backend developers, to translate wireframes and design mockups into fully functional web interfaces.",
                  "Conducted thorough testing and debugging, including user acceptance testing (UAT), to ensure optimal website performance, usability, and accessibility compliance.",
                ]}
              />

              <EmployeeExp
                corpName={"PT. Eigen Tri Mathema"}
                title={"Web Developer"}
                period={"2000 - present"}
                desc={[
                  "Designed and implemented dynamic and interactive web applications using modern JavaScript frameworks like React and Angular, adhering to best practices and design patterns.",
                  "Utilized RESTful APIs and GraphQL to fetch, update, and display data, creating highly responsive and data-driven user interfaces.",
                  "Actively participated in code reviews, provided constructive feedback to team members, and enforced coding standards and code quality guidelines.",
                ]}
              />

              <EmployeeExp
                corpName={"PT. Eigen Tri Mathema"}
                title={"Web Developer"}
                period={"2000 - present"}
                desc={[
                  "Led the end-to-end development of a scalable e-commerce platform, ensuring robust security measures and implementing features such as user authentication, authorization, and payment gateways.",
                  "Implemented server-side rendering (SSR) and client-side optimization techniques for improved SEO, page load times, and overall user experience, resulting in a 30% increase in organic traffic and higher conversion rates.",
                  "Conducted thorough performance optimization and refactoring of legacy code to enhance website speed, scalability, and maintainability, contributing to a 25% reduction in page loading time.",
                ]}
              />
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
