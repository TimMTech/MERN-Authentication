import styled from "styled-components";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Nav = ({ userLoggedIn, user, handleLogOut }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeNav = () => {
    setHamburgerOpen(false);
  };

  return (
    <NavWrapper>
      <NavTitle>
        <StyledLink to={"/"}>ChatBot</StyledLink>
      </NavTitle>
      <MenuWrapper>
        {userLoggedIn ? (
          <LinkList toggleMenu={hamburgerOpen}>
            <UserName>{user.username}</UserName>
            <LogOutButton to="/" onClick={handleLogOut}>
              Log Out
            </LogOutButton>
            <ViewDash to="/dashboard" onClick={closeNav}>
              Dashboard
            </ViewDash>
            <CloseNav onClick={closeNav}>Close</CloseNav>
          </LinkList>
        ) : (
          <LinkList toggleMenu={hamburgerOpen}>
            <StyledLink to="/login" onClick={closeNav}>
              Login
            </StyledLink>
            <StyledLink to="/signup" onClick={closeNav}>
              Sign Up!
            </StyledLink>
            <CloseNav onClick={closeNav}>Close</CloseNav>
          </LinkList>
        )}
        <HamburgerMenu onClick={toggleHamburger}>
          <Hamburger />
        </HamburgerMenu>
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
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: fixed;
    cursor: pointer;
  }
`;

const UserName = styled.h1`
  color: rgb(255, 255, 255);
  @media (max-width: 750px) {
    font-size: 3rem;
  }
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
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 750px) {
    display: ${(props) => (props.toggleMenu ? "flex" : "none")};
    font-size: 1.5rem;
    border: 0.1rem solid rgb(255, 255, 255);
    border-radius: 0.5rem;
    flex-direction: column;
    align-items: center;
    background-color: rgb(0, 0, 0);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 99;
  }
`;

const CloseNav = styled.span`
  @media (max-width: 750px) {
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: 1s;
    &: hover {
      transform: scale(1.1, 1.1);
    }
  }
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
