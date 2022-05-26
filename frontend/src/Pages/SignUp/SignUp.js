import styled from "styled-components";

const SignUp = ({ signUpValues, handleSignUpChange, handleSubmitSignUp, errorMessage }) => {
  return (
    <FormWrapper>
      <StyledForm method="POST" action="/">
        <Title>Sign Up!</Title>
        {errorMessage.firstname}
        <StyledInput
          name="firstname"
          value={signUpValues.firstname}
          onChange={(e) => handleSignUpChange(e)}
          type="text"
          placeholder="First Name"
        />
        {errorMessage.email}
        <StyledInput
          name="email"
          value={signUpValues.email}
          onChange={(e) => handleSignUpChange(e)}
          type="email"
          placeholder="Email"
        />
        {errorMessage.username}
        <StyledInput
          name="username"
          value={signUpValues.username}
          onChange={(e) => handleSignUpChange(e)}
          type="text"
          placeholder="Username"
        />
        {errorMessage.password}
        <StyledInput
          name="password"
          value={signUpValues.password}
          onChange={(e) => handleSignUpChange(e)}
          type="password"
          placeholder="Password"
        />
        <SubmitButton type="button" onClick={handleSubmitSignUp}>
          Sign Up!
        </SubmitButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default SignUp;

const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  color: rgb(255, 255, 255);
  font-family: ChakraPetch Bold;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledForm = styled.form`
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.15rem solid rgb(255, 255, 255);
  width: 50%;
  height: 30rem;
`;

const StyledInput = styled.input`
  width: 75%;
  height: 3rem;
  padding: 1rem;
  font-size: 1.2rem;
  ::placeholder {
    font-size: 1.2rem;
  }
  &: focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 30%;
  height: 3rem;
  font-size: 1.2rem;
  font-family: ChakraPetch Bold;
  border: none;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;
