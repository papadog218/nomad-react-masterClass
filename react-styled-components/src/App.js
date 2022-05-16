import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Warpper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;


function App() {
  return (
    <Warpper>
      <Title>Hello~~</Title>
    </Warpper>
  );
}

export default App;
