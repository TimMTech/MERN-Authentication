import axios from "axios"

export const becomeAdmin = (adminValues) => {
  const token = JSON.parse(localStorage.getItem("user")).user;
  axios
    .post(
      "https://mern-authorization-top.herokuapp.com/auth/become-admin",
      adminValues,
      {
        headers: {
          authorization: token,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      window.location.href = "/admin-rules";
    })
    .catch((err) => {
      console.log(err);
      window.location.href = "/incorrect-admin-password";
    });
};

export const becomeMember = (memberValues) => {
  const token = JSON.parse(localStorage.getItem("user")).user;
  axios
    .post(
      "https://mern-authorization-top.herokuapp.com/auth/become-member",
      memberValues,
      {
        headers: {
          authorization: token,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      window.location.href = "/member-rules";
    })
    .catch((err) => {
      console.log(err);
      window.location.href = "/incorrect-member-password";
    });
};