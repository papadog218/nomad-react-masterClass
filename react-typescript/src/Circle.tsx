import styled from "styled-components";

type ContainerProps = {
    bgColor: string;
};
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

type CircleProps = {
    yhBG: string;
};

function Circle ({yhBG}: CircleProps) {
    return (
        <Container bgColor={yhBG}></Container>
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