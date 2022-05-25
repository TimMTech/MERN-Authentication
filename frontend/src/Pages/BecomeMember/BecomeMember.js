import styled from "styled-components"
import Unauthenticated from "../AuthenticationErrors/Unauthenticated"

const BecomeMember = ({isAuthenticated, memberValues, handleMemberChange, handleMemberSubmit}) => {
    return (
      <>
        {isAuthenticated ? (
          <FormWrapper>
            <StyledForm>
              <Title>Enter Member Password</Title>
              <StyledInput
                name="password"
                value={memberValues.password}
                onChange={(e) => handleMemberChange(e)}
                type="password"
                placeholder="Password"
              />
              <SubmitMember type="button" onClick={handleMemberSubmit}>
                Log In!
              </SubmitMember>
            </StyledForm>
          </FormWrapper>
        ) : (
          <Unauthenticated />
        )}
      </>
    );
}

export default BecomeMember

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

const SubmitMember = styled.button`
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