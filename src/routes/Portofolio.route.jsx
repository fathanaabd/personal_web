import { useLoaderData, Form } from "react-router-dom";
import { getAllPortofolio } from "../data/GetAllPorto.data";
import { CreatePorto } from "../data/CreatePorto.data";

export async function loader() {
  return await getAllPortofolio();
}

export async function action() {
  return await CreatePorto();
}

export default function Portofolio() {
  const porto_data = {
    name: useLoaderData().name,
    desc: useLoaderData().desc,
    pic: [
      {
        name: "samsudin",
        asal: "garut",
      },
      {
        nama: "agus rahmat",
        asal: "cicaheum",
      },
    ],
    datetime: useLoaderData().datetime,
  };

  return (
    <>
      <div className="bg-red-500 flex flex-col gap-4">
        <h1>{porto_data.name}</h1>
        <h2>{porto_data.desc.length ? porto_data.desc : "No Desc"}</h2>
        <h3>{porto_data.pic[0].length ? porto_data.pic[0].name : "No PIC"}</h3>
        <h3>{porto_data.datetime}</h3>
      </div>
      <div>
        <Form method="post">
          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  );
}
