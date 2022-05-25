import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ userLoggedIn, user, handleLogOut }) => {
  return (
    <NavWrapper>
      <NavTitle>
        <StyledLink to={"/"}>ChatBot</StyledLink>
      </NavTitle>
      <MenuWrapper>
        {userLoggedIn ? (
          <UserWrapper>
            <UserName>{user.details}</UserName>
            <LogOutButton to="/" onClick={handleLogOut}>
              Log Out
            </LogOutButton>
            <ViewDash to="/dashboard">Dashboard</ViewDash>
          </UserWrapper>
        ) : (
          <LinkList>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/signup">Sign Up!</StyledLink>
          </LinkList>
        )}
      </MenuWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  cursor: default;
  background-color: rgb(0, 0, 0);
  font-family: ChakraPetch Regular;
`;

const NavTitle = styled.h1`
  color: rgb(255, 255, 255);
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const UserName = styled.h1`
  color: rgb(255, 255, 255);
`;

const LogOutButton = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const MenuWrapper = styled.div``;

const LinkList = styled.ul`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const ViewDash = styled(Link)`
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;
