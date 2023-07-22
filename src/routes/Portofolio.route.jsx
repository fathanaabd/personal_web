export default function Portofolio() {
  const porto_data = {
    name: "Project Name",
    desc: "Description of the project",
    pic: {
      name: ["pic1_name", "pic2_name"],
    },
    datetime: "Date & time of the project occur",
  };
  return (
    <>
      <div className="bg-red-500 flex flex-col gap-4">
        <h1>{porto_data.length ? porto_data.name : "No Name"}</h1>
        <h2>{porto_data.length ? porto_data.desc : "No Desc"}</h2>
        <h3>{porto_data.length ? porto_data.pic : "No PIC"}</h3>
        <h3>
          {porto_data.length ? porto_data.datetime : "No Datetime Provided"}
        </h3>
      </div>
    </>
  );
}
