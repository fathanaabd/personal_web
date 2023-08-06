export default function SkillsHero() {
  return (
    <>
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col gap-2 text-white">
          <div className="font-montagaR400">what im capable of</div>
          <div className="tracking-tighter font-gelgooR400 ">
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Programming Language</p>
              <p className="font-extralight">JavaScript | Golang</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Framework</p>
              <p className="font-extralight">express.js | Gin</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Design Pattern</p>
              <p className="font-extralight">Repository Layer</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-extrabold">Databases</p>
              <p className="font-extralight">MySQL | Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
