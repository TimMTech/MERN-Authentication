import axios from "axios"

const becomeMember = (memberValues) => {
    const token = JSON.parse(localStorage.getItem("user")).user
    axios
        .post("http://localhost:5000/auth/become-member", memberValues, {
            headers: {
                authorization: token
            }
        })
        .then((response) => {
            console.log(response.data)
            window.location.href = "/member-rules"
            
        })
        .catch((err) => {
            console.log(err)
            window.location.href = "/incorrect-member-password";
        })
}

export default becomeMember;