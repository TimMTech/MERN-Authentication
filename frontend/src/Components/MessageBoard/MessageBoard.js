import styled from "styled-components";
import moment from "moment";

const MessageBoard = ({ messages, isMember, isAdmin, deletePost }) => {
  const dateFormat = (date) => {
    return moment(date).startOf("day").fromNow();
  };

  return (
    <MessageBoardWrapper>
      {messages
        .filter((post) => post.message)
        .map((post) => {
          const { _id, message, date, username } = post;
          return (
            <PostWrapper key={_id}>
              <MessageDiv>
                <Message>{message}</Message>
              </MessageDiv>
              <AuthorDiv>
                <Date>{dateFormat(date)}</Date>
                {isMember ? (
                  <Username>{username}</Username>
                ) : (
                  <Username>anonymous</Username>
                )}
                {isAdmin && (
                  <DeletePost onClick={() => deletePost(post)}>X</DeletePost>
                )}
              </AuthorDiv>
            </PostWrapper>
          );
        })}
    </MessageBoardWrapper>
  );
};

export default MessageBoard;

const MessageBoardWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  font-family: ChakraPetch Regular;
`;

const PostWrapper = styled.div`
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  border: 0.15rem solid black;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 1rem;
  height: 15rem;
  width: 50%;
`;
const MessageDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
`;

const Message = styled.p`
  font-size: 2rem;
  padding: 0.8rem;
`;

const AuthorDiv = styled.div``;

const Date = styled.p`
  text-align: right;
`;

const Username = styled.p`
  text-align: right;
`;

const DeletePost = styled.button`
  font-family: ChakraPetch Regular;
  width: 25%;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(255, 255, 255);
  transition: 1s;
  &: hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;
