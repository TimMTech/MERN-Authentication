import axios from "axios";

const loginUser = (loginValues) => {
  axios
    .post("http://localhost:5000/auth/login", loginValues)
    .then((response) => {
      if (response.data.status === "ok") {
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/dashboard"
      } else {
        window.location.href = "/error";
        console.log("user not found");
      }
    });
};

export default loginUser;
