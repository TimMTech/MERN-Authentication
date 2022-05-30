import styled from "styled-components";
import { Link } from "react-router-dom";

const NotMember = () => {
  return (
    <ErrorWrapper>
      <ErrorMessageWrapper>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorMessage>Not A Member.  Please Provide Password To Become Member.</ErrorMessage>
        <BecomeMemberButton to="/become-member">Become Member</BecomeMemberButton>
      </ErrorMessageWrapper>
    </ErrorWrapper>
  );
};

export default NotMember;

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
  width: 80%;
  height: 30rem;
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
  width: 50%;
  text-align:center;
  font-size: 1rem;
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

const BecomeMemberButton = styled(Link)`
  text-decoration: none;
  font-family: ChakraPetch Regular;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.1rem solid rgb(255,255,255);
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(255, 255, 255);
  transition: 1s;
  &: hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;
