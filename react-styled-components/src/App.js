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
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// // 아래와 같이하면 기본 css값이 중복됨
// // const Circle = styled.div`
// //   background-color: ${(props) => props.bgColor};
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50px;
// // `;
// // 중복제거 방법 (상속개념임)
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// #2.3
// const Btn = styled.button`
//   color: #fff;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
// 특정 태그들에 동일한 속성값을 주고 싶을 때
const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      {/* #2.1 */}
      {/* <BoxOne>
         <Text>Hello</Text>
       </BoxOne>
       <BoxTwo/> */}

      {/* #2.2 */}
      {/* <Box bgColor="teal"/> */}
      {/* <Box bgColor="tomato"/> */}
      {/* <Circle bgColor="tomato"/> */}

       {/* #2.3 */}
       {/* as 속성으로 styled의 태그명을 바꿀수있음 */}
       {/* <Btn>Log in</Btn>
       <Btn as='a'>Log in</Btn> */}
       {/* 특정 태그들에 동일한 속성값을 주고 싶을 때 */}
       <Input/>
       <Input/>
       <Input/>
       <Input/>
       <Input/>
    </Father>
  );
}

export default App;
