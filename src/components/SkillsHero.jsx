export default function SkillsHero() {
  return (
    <>
      <div className="container mx-auto py-24 px-6">
        <div className="flex flex-col gap-2 text-white">
          <div className="font-montagaR400">what im capable of</div>
          <div className="tracking-tighter font-gelgooR400 ">
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">C/C++</p>
              <p className="font-extralight">JavaScript</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Computaional Thinking</p>
              <p className="font-extralight">Basic Electronic</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Front-End Web Development</p>
              <p className="font-extralight">Github</p>
            </div>
            {/* <div className="flex flex-row justify-between">
              <p className="font-extrabold">Databases</p>
              <p className="font-extralight">MySQL | Firebase</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
