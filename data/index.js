export default async function fetching(url) {
  try {
    let response = await fetch(`./data/api/${url}.json`);
    if (!response.ok) {
      throw new Error("Fetching Error.");
    }
    let data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}