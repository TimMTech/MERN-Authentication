import axios from "axios"

export const postUser = (signUpValues) => {
  axios
    .post("http://localhost:5000/auth/signup", signUpValues)
    .then((response) => {
      console.log(response.data);
      window.location.href = "/login";
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.error === "Username Already Exists")
        window.location.href = "/username-exists";
    });
};

export const loginUser = (loginValues) => {
  axios
    .post("http://localhost:5000/auth/login", loginValues)
    .then((response) => {
      if (response.data.status === "ok") {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/error";
        console.log("user not found");
      }
    });
};