import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;
// #2.1
// const BoxOne = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `;
// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;
// const Text = styled.span`
//   color: #fff;
// `;

// #2.2
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// 아래와 같이하면 기본 css값이 중복됨
// const Circle = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
// `;

// 중복제거 방법 (상속개념임)
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    // #2.1
    // <Father>
    //   <BoxOne>
    //     <Text>Hello</Text>
    //   </BoxOne>
    //   <BoxTwo/>
    // </Father>

    // #2.2
    <Father>
      <Box bgColor="teal"/>
      {/* <Box bgColor="tomato"/> */}
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;
