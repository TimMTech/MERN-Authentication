import axios from "axios";

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
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      window.location.href = "/error"
      console.log(err)
    })
};

export const logoutUser = () => {
  window.location.href = "/";
  window.localStorage.clear();
  window.localStorage.removeItem("user");
};