import styled from "styled-components";
import MessageBoard from "../../Components/MessageBoard/MessageBoard";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const Home = ({ messages, isAdmin, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <HomeWrapper>
          {messages && messages.length === 0 && (
            <IntroWrapper>
              <Welcome>Welcome To ChatBot!</Welcome>
              <IntroLogin>Login To Start Posting Your Thoughts!!</IntroLogin>
              <IntroSignUp>
                If New! Sign Up To Our Site And Join Our Community!!
              </IntroSignUp>
              <SignUpButton to="/signup">Sign Up!</SignUpButton>
            </IntroWrapper>
          )}
          {messages && messages.length > 0 && (
            <>
              <Title>Message Board</Title>
              <MessageBoard messages={messages} isAdmin={isAdmin} />
            </>
          )}
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
`;

const IntroWrapper = styled.div`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 2rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ChakraPetch Bold;
`;

const Welcome = styled.h1``;

const IntroLogin = styled.p``;

const IntroSignUp = styled.p`
  padding-top: 3rem;
`;


const SignUpButton = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  margin-top: 1.5rem;
  width: 50%;
  background-color: rgb(0, 0, 0);
  padding: 1.5rem;
  font-size: 2rem;
  font-family: ChakraPetch Bold;
  border: 0.15rem solid rgb(0, 0, 0);
  border-radius: 1rem;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;

const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-family: ChakraPetch Bold;
  font-size: 4rem;
  text-align: center;
  padding-top: 2rem;
  letter-spacing: 1rem;
`;
