import axios from "axios";

const loginUser = (loginValues, callback) => {
  axios
    .post("http://localhost:5000/auth/login", loginValues)
    .then((response) => {
      if (response.data.status === "ok") {
        window.location.href = "/dashboard";
        callback(localStorage.setItem("user", JSON.stringify(response.data)));
      } else {
        console.log("user not found");
      }
    });
};

export default loginUser;
