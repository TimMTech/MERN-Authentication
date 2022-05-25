import styled from "styled-components";

const Login = ({ loginValues, handleLoginChange, handleLoginSubmit }) => {
  return (
    <FormWrapper>
      <StyledForm>
        <Title>Enter Username and Password</Title>
        <StyledInput
          name="username"
          value={loginValues.username}
          onChange={(e) => handleLoginChange(e)}
          type="text"
          placeholder="Username"
        />
        <StyledInput
          name="password"
          value={loginValues.password}
          onChange={(e) => handleLoginChange(e)}
          type="password"
          placeholder="Password"
        />
        <LoginButton type="button" onClick={handleLoginSubmit}>Log In!</LoginButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;

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
  background-color: rgb(0,0,0);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
  border: 0.15rem solid rgb(255,255,255);
  width: 50%;
  height: 30rem;
`;

const StyledInput = styled.input`
  width: 75%;
  height: 4rem;
  padding: 1rem;
  font-size: 1.2rem;
  ::placeholder {
    font-size: 1.2rem;
  }
  &: focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 30%;
  height: 3rem;
  font-size: 1.2rem;
  font-family: ChakraPetch Bold;
  border: none;
  transition: 1s;
  &: hover {
    transform: scale(1.1,1.1);
    cursor: pointer;
  }
`;
