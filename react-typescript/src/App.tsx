import styled from "styled-components";

const Warpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.txtColor};
`;

function App() {
  return (
    <Warpper>
      <Title>Hello typeScript!</Title>
    </Warpper>
  );
}

export default App;
