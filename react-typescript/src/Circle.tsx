import { useState } from "react";
import styled from "styled-components";

type ContainerProps = {
    bgColor: string;
    borderColor: string;
};
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

type CircleProps = {
    yhBGColor: string;
    yhBDColor?: string;
    text?: string;
};

function Circle ({yhBGColor, yhBDColor, text = "default text"}: CircleProps) {
    // 제네릭 타입으로 2개의 타입을 가진 state를 정의할수있다
    const [val, setVal] = useState<number|string>(0);
    setVal("2");
    setVal(2);
    setVal(false);
    return (
        <Container bgColor={yhBGColor} borderColor={yhBDColor ?? yhBGColor}>
            {text}
        </Container>
    );
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `
    Hello${playerObj.name} your ${playerObj.age} years old.
`;

sayHello({name: 'yh', age: 29});
sayHello({name: 'yh', age: 29});