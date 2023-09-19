"use server";

export async function getPosts() {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/get-posts`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return [];
    } else {
      return api_data.posts;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getComments(post_id) {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/get-comments/${post_id}`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return [];
    } else {
      return api_data.posts;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createPost(user_api_key, title, content) {
  try {
    const data = {
      title: title,
      content: content,
    };
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/create-post/`,
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

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function deletePost(user_api_key, post_id) {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/delete-post/${post_id}`,
      {
        cache: "no-store",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function createComment(user_api_key, post_id, content) {
  try {
    const data = {
      content: content,
    };
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/create-comment/${post_id}`,
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

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function deleteComment(user_api_key, post_id, comment_id) {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/delete-comment/${post_id}/${comment_id}`,
      {
        cache: "no-store",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function upvotePost(user_api_key, post_id) {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/upvote-post/${post_id}`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function downvotePost(user_api_key, post_id) {
  try {
    const api_res = await fetch(
      `https://happily-backend.onrender.com/${process.env.frontend_secret_key}/community/${user_api_key}/downvote-post/${post_id}`,
      { cache: "no-store" }
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      return;
    } else {
      return api_data;
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
