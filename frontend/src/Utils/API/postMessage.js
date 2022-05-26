import axios from "axios";

const postMessage = (messageValues) => {
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

export default postMessage;
