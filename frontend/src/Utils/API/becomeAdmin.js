import axios from "axios"

const becomeAdmin = (adminValues) => {
    const token = JSON.parse(localStorage.getItem("user")).user
    axios
        .post("http://localhost:5000/auth/become-admin", adminValues, {
            headers: {
                authorization: token
            }
        })
        .then((response) => {
            console.log(response.data)
            window.location.href = "/admin-rules"
        })
        .catch((err) => {
            console.log(err)
            window.location.href = "/incorrect-admin-password"
        })
}

export default becomeAdmin