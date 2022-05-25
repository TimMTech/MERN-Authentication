import styled from "styled-components"
import ClipLoader from "react-spinners/ClipLoader"

const Loading = ({loading}) => {
    return (
      <ClipWrapper>
        <ClipLoader loading={loading} color="red" size="200px"  />
      </ClipWrapper>
    );
}

export default Loading



const ClipWrapper = styled.div`
    min-height: 100vh;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items:center;
`