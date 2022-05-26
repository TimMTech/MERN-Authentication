export const signUpValidate = (firstname, username, email, password) => {
    if (!firstname.firstname) {
        console.log('please enter firstname')
        return
    }
    if (!username.username ) {
        console.log('please enter username')
        return;
    }
    if (username.username.length < 6) {
        console.log('please enter a username longer than 6 characters')
        return;
    }
    if (!email.email) {
        console.log('please enter email')
        return;
    }
    if (!password.password) {
        console.log('please enter a password')
        return;
    }
    if (password.password.length < 6){
        console.log('please enter a password longer than 6 characters')
        return;
    }
    
}