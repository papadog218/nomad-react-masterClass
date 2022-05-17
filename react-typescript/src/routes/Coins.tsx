import styled from "styled-components";

const Title = styled.h1`
    color: ${(porps) => porps.theme.accentColor};
`;

function Coins() {
    return (
        <Title>Coins</Title>
    );
}

export default Coins;