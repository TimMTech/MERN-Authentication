import styled from "styled-components"

const Hamburger = () => {
    return (
      <HamburgerWrapper>
        <Burger />
        <Burger />
        <Burger />
      </HamburgerWrapper>
    );
}

export default Hamburger

const HamburgerWrapper = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index 10;
`

const Burger = styled.div`
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: rgb(255,255,255);
    transform-origin: 1px;
    transition: all 0.3s linear;
`
