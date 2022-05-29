import styled from "styled-components";
import Unauthenticated from "../AuthenticationErrors/Unauthenticated";

const BecomeAdmin = ({
  isAuthenticated,
  adminValues,
  handleAdminChange,
  handleAdminSubmit,
}) => {
  return (
    <>
      {isAuthenticated ? (
        <FormWrapper>
          <StyledForm method="POST" action="/">
            <Title>Enter Admin Password</Title>
            <StyledInput
              name="password"
              value={adminValues.password}
              onChange={(e) => handleAdminChange(e)}
              type="password"
              placeholder="Password"
            />
            <SubmitAdmin type="button" onClick={handleAdminSubmit}>
              Log In!
            </SubmitAdmin>
          </StyledForm>
        </FormWrapper>
      ) : (
        <Unauthenticated />
      )}
    </>
  );
};

export default BecomeAdmin;

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

const SubmitAdmin = styled.button`
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
