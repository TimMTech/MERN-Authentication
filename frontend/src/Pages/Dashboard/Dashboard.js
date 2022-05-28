import styled from "styled-components";
import MessageBoard from "../../Components/MessageBoard/MessageBoard";
import Unauthenticated from "../AuthenticationErrors/Unauthenticated";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const DashBoard = ({
  messages,
  isAuthenticated,
  isMember,
  isAdmin,
  isLoading,
  deletePost,
}) => {
  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <>
          {isAuthenticated ? (
            <DashBoardWrapper>
              <LeftPanel>
                <NewMessage to={"/new-message"}>+ New Message</NewMessage>
                <BecomeMember to={"/become-member"}>Become Member</BecomeMember>
                <BecomeAdmin to={"/become-admin"}>Become Admin</BecomeAdmin>
              </LeftPanel>
              <RightPanel>
                <Title>Dashboard</Title>
                <Caption>Message Board</Caption>
                <MessageBoard
                  messages={messages}
                  isMember={isMember}
                  isAdmin={isAdmin}
                  deletePost={deletePost}
                />
              </RightPanel>
            </DashBoardWrapper>
          ) : (
            <Unauthenticated />
          )}
        </>
      )}
    </>
  );
};

export default DashBoard;

const DashBoardWrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: rgb(255, 255, 255);
  font-family: ChakraPetch Bold;
  display: flex;
  cursor: default;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Caption = styled.p`
  color: rgb(255, 255, 255);
  font-family: ChakraPetch Bold;
  font-size: 2rem;
  text-align: center;
  padding: 1rem 0;
  letter-spacing: 0.5rem;
`;

const LeftPanel = styled.div`
  background-color: rgb(0, 0, 0);
  width: 33%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 0.1rem solid rgb(255, 255, 255);
`;

const RightPanel = styled.div`
  width: 100%;
  border-top: 0.1rem solid rgb(255, 255, 255);
`;

const NewMessage = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 1.5rem;
  font-family: ChakraPetch Bold;
  margin-left: 2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const BecomeMember = styled(Link)`
  text-decoration: none;
  padding-left: 1rem;
  width: 100%;
  border: none;
  background-color: transparent;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-family: ChakraPetch Bold;
  cursor: pointer;
  text-align: left;
  &: hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`;

const BecomeAdmin = styled(Link)`
text-decoration: none;
  padding-left: 1rem;
  width: 100%;
  border: none;
  background-color: transparent;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-family: ChakraPetch Bold;
  cursor: pointer;
  text-align: left;
  &: hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`;
