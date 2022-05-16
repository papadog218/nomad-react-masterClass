import styled from 'styled-components';
import { keyframes } from 'styled-components';

// const Warpper = styled.div`
//   display: flex;
// `;

// css상속 예제
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// html 태그명만 바꾸기 예제
// const Btn = styled.button`
//   color: tomato;
// `;

// html 반복되는 속성 처리법
// const Input = styled.input.attrs({required : true})`
//   background-color: tomato;
// `;

// 애니메이션 예제
// export를 해주면 다른곳에서도 해당 애니메이션 효과를 사용가능함
const colorAni = keyframes`
  form {
    color: teal;
  }
  to {
    color: tomato;
  }
`;

// const Btn = styled.button`
//   animation: ${colorAni} .5s infinite;
// `;

// 부모에서 자식 태그 선택자 사용하는법
// const Warpper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   h1 {
//     color: tomato;
//     /* 자기 자신을 선택하는 셀렉터기호 */
//     &:hover {
//       color: teal;
//     }
//   }
// `;

// styled-components를 선택자로 쓰는법
const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;

const Warpper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 60px;
  }
`;


function App() {
  return (
    <Warpper>
      {/* css상속 예제 */}
      {/* <Box bgColor="teal"/>
      <Circle  bgColor="tomato"/> */}

      {/* html 태그명만 바꾸기 예제 */}
      {/* <Btn>Log in</Btn>
      <Btn as={'a'}>Go Home</Btn> */}

      {/* html 반복되는 속성 처리법 */}
      {/* <Input/>
      <Input/>
      <Input/>
      <Input/> */}

      {/* 애니메이션 예제 */}
      {/* <Btn>Hello!!</Btn> */}

      {/* 부모에서 자식 태그 선택자 사용하는법 */}
      {/* <h1>Hello~</h1> */}

      {/* styled-components를 선택자로 쓰는법 */}
      <Title>Hello~~</Title>
      <h1>Hello~~</h1>
    </Warpper>
  );
}

export default App;
