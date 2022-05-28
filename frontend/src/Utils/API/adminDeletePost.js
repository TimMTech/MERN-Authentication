import axios from "axios";

const adminDeletePost = (post) => {

  axios
    .post("http://localhost:5000/auth/message/delete", post)
    
    .then((response) => {
        console.log(response)
        window.location.href = "/"
    })
    .catch((err) => console.log(err))
};

export default adminDeletePost;
