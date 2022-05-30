import axios from "axios"

export const postMessage = (messageValues) => {
  let token = JSON.parse(localStorage.getItem("user")).user;

  axios
    .post("http://localhost:5000/auth/message", messageValues, {
      headers: {
        authorization: token,
      },
    })

    .then((response) => {
      console.log(response);
      window.location.href = "/dashboard";
    });
};

export const getMessage = (callback) => {
  axios
    .get("http://localhost:5000/auth/message")
    .then((response) => {
      callback(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adminDeletePost = (post) => {
  axios
    .post("http://localhost:5000/auth/delete", post)

    .then((response) => {
      console.log(response);
      window.location.href = "/";
    })
    .catch((err) => console.log(err));
};