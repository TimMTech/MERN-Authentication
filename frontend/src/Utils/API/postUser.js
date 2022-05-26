import axios from "axios";

const postUser = (signUpValues) => {
  axios
    .post("http://localhost:5000/auth/signup", signUpValues)
    .then((response) => {
      console.log(response.data);
      window.location.href = "/login";
    })
    .catch((err) => {
      if (err.response.data.error === "Username Already Exists")
        window.location.href = "/username-exists";
    });
};

export default postUser;
