import styled from "styled-components";

const UsernameExists = () => {
  return (
    <ErrorWrapper>
      <ErrorMessageWrapper>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorMessage>Username Exists! Try New Username.</ErrorMessage>
      </ErrorMessageWrapper>
    </ErrorWrapper>
  );
};

export default UsernameExists;

const ErrorWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ChakraPetch Bold;
`;

const ErrorMessageWrapper = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 0.1rem solid white;
  border-radius: 1rem;
  width: 70%;
  height: 20rem;
`;

const ErrorTitle = styled.h1`
  font-size: 4rem;
  animation-name: re-size;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @keyframes re-size {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
  animation-name: re-size;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @keyframes re-size {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.5, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;
