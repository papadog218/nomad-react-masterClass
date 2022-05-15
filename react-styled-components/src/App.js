import styled from 'styled-components';
import { keyframes } from 'styled-components';

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
// const Input = styled.input.attrs({required: true, minLength: 10})`
//   background-color: tomato;
// `;

// #2.4
const Warpper = styled.div`
  display: flex;
`;
const rotateAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAni} 1s linear infinite;
  span {
   font-size: 50px;
   &:hover { // &로 자기 자신의 이름을 가져올수있음
    font-size: 100px;
   }
  }
`;

function App() {
  return (
    // <Father>
    //   {/* #2.1 */}
    //   {/* <BoxOne>
    //      <Text>Hello</Text>
    //    </BoxOne>
    //    <BoxTwo/> */}

    //   {/* #2.2 */}
    //   {/* <Box bgColor="teal"/> */}
    //   {/* <Box bgColor="tomato"/> */}
    //   {/* <Circle bgColor="tomato"/> */}

    //    {/* #2.3 */}
    //    {/* as 속성으로 styled의 태그명을 바꿀수있음 */}
    //    {/* <Btn>Log in</Btn>
    //    <Btn as='a'>Log in</Btn> */}
    //    {/* 특정 태그들에 동일한 속성값을 주고 싶을 때 */}
    //    <Input/>
    //    <Input/>
    //    <Input/>
    //    <Input/>
    //    <Input/>
    // </Father>

    // #2.4
    <Warpper>
      <Box>
        <span>😁</span>
      </Box>
    </Warpper>
  );
}

export default App;
