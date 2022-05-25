import axios from "axios";

const getMessage = (callback) => {
  axios
    .get("http://localhost:5000/auth/message")
    .then((response) => {
      callback(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getMessage;
