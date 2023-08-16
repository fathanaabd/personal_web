import { Link } from "react-router-dom";

export default function EmployeeExp({ corpName, title, period, desc }) {
  return (
    <>
      <div className="flex flex-col pt-5 text-left font-montagaR400">
        <p className="text-xl subpixel-antialiased">{corpName}</p>
        <p className="text-lg subpixel-antialiased">{title}</p>
        <p className="italic opacity-80 text-stone-500 subpixel-antialiased">
          {period}
        </p>
        <div className="py-4 px-2 flex flex-col gap-2">
          <p>{desc[0]}</p>
          <p>{desc[1]}</p>
          <p>{desc[2]}</p>
        </div>
      </div>
    </>
  );
}
