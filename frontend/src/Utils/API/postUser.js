import axios from "axios";

const postUser = (signUpValues) => {
  axios
    .post("http://localhost:5000/auth/signup", signUpValues)
    .then((response) => console.log(response));
};

export default postUser;
