"use server";
export async function getProfs() {
  try {
    const api_res = await fetch(
      `${process.env.origin_link}/${process.env.frontend_secret_key}/consultancy/get-profs`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();
    if (!api_res.ok || api_data.success === 0) {
      return [];
    } else {
      return api_data.profs;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function bookProf(user_api_key, prof_id) {
  try {
    const api_res = await fetch(
      `${process.env.origin_link}/${process.env.frontend_secret_key}/consultancy/${user_api_key}/book/${prof_id}`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();
    if (!api_res.ok || api_data.success === 0) {
      return [];
    } else {
      return api_data.appointment_id;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getChats(user_api_key, appointment_id) {
  try {
    const api_res = await fetch(
      `${process.env.origin_link}/${process.env.frontend_secret_key}/consultancy/${user_api_key}/chat/${appointment_id}/`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();
    if (!api_res.ok || api_data.success === 0) {
      return [];
    } else {
      return api_data.chats;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function postChat(user_api_key, appointment_id, content) {
  try {
    const data = {
      content: content,
    };
    const api_res = await fetch(
      `${process.env.origin_link}/${process.env.frontend_secret_key}/consultancy/${user_api_key}/chat/${appointment_id}/`,
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const api_data = await api_res.json();
    if (!api_res.ok || api_data.success === 0) {
      return [];
    } else {
      return api_data.chats;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
