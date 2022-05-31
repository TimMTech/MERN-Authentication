import axios from "axios"

export const postMessage = (messageValues) => {
  let token = JSON.parse(localStorage.getItem("user")).user;

  axios
    .post(
      "https://mern-authorization-app.herokuapp.com/auth/message",
      messageValues,
      {
        headers: {
          authorization: token,
        },
      }
    )

    .then((response) => {
      console.log(response);
      window.location.href = "/dashboard";
    });
};

export const getMessage = (callback) => {
  axios
    .get("https://mern-authorization-app.herokuapp.com/auth/message")
    .then((response) => {
      callback(response.data);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adminDeletePost = (post) => {
  axios
    .post("https://mern-authorization-app.herokuapp.com/auth/delete", post)

    .then((response) => {
      console.log(response);
      window.location.href = "/";
    })
    .catch((err) => console.log(err));
};