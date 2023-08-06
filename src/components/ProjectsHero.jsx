import { Link } from "react-router-dom";

export default function ProjectsHero({ title, desc }) {
  return (
    <>
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col pt-2 ">
          <div>
            <Link to={"#"}>
              <h1 className="font-gelgooR400 tracking-tight py-4 text-xl">
                {title}
              </h1>
            </Link>
            <div className="bg-red-600">
              <img src="https://placekitten.com/g/678/356" alt="projects1" />
            </div>
            <p className="italic font-thin font-montagaR400 opacity-50 text-justify">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
