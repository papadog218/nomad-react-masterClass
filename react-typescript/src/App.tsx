import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.txtColor};
`;

interface DummyPorps {
  text: string;
  active?: boolean; // ?가 붙으면 선택적 prop이 된다
}

// prop 기본 값 설정하는 법
function Dummy({text, active = false}: DummyPorps) {
  return (<H1>{text}</H1>);
}

function App() {
  // 이벤트 처리하는 법
  /*
    React.FormEvent<HTMLButtonElement> :
    어떤 이벤트를(FormEvent) 어떤 태그가(<HTMLButtonElement>) 발생하게 할지 정해줘야함
    현재 이벤트가 FormEvent 인 것은 폼태그 안에있기 때문임 폼태그가 없다면 MouseEvent 가 된다
  */
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.
  };
  return (
   <Container>
     <Dummy active text='hello'/>
     <form>
      <button onClick={onClick}>click me</button>
     </form>
   </Container>
  );
}

export default App;
