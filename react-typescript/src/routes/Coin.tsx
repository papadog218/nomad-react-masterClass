import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(porps) => porps.theme.accentColor};
`;

// interface 를 type 으로 변경하니 잘됨
type RouteParams = {
    coinId: string;
}
interface RouteState {
    state: {name: string};
}

function Coin() {
    const {coinId} = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const { state } = useLocation() as RouteState;

    return (
        <Container>
            <Header>
                {/*
                    url을 치고 접근할 경우 state에 값을 못받은 상태가 됨으로 에러 발생함
                    이를 방지하고자 state.name 을 state?.name || 'Loading...' 으로 변경함
                
                */}
                <Title>{state?.name || 'Loading...'}</Title>
            </Header>
            {loading ? <Loader>'Loading...'</Loader> : null}
        </Container>
    );
}

export default Coin;