const body = {
  msg: "test msg from fetch api to post",
  cc: "sad@asdjkaslkdj.com",
};

export async function CreatePorto() {
  return fetch(
    `https://personalweb-8b9f0-default-rtdb.asia-southeast1.firebasedatabase.app/portofolio/`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Contect-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
}
