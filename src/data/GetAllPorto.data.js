export async function getAllPortofolio() {
  return await fetch(
    `https://personalweb-8b9f0-default-rtdb.asia-southeast1.firebasedatabase.app/portofolio/porto1.json`,
  );
}
