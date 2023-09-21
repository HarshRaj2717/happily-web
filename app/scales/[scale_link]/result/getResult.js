"use server";

export async function getResult(scale_link, user_res) {
  try {
    const api_res = await fetch(
      `${process.env.origin_link}/${process.env.frontend_secret_key}/scales/${scale_link}/?user_res=${user_res}`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return [];
    } else {
      console.log(api_data);
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
