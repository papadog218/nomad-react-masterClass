import { useEffect, useState } from "react";
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

// interface를 사용하려면 const { state } = useLocation() as RouteState; 이런 형식으로..
// interface RouteParams {
//     coinId: string;
// }
interface RouteState {
    state: {name: string};
}
interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}
interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
}

function Coin() {
    const {coinId} = useParams<RouteParams>();
    // const {coinId} = useParams() as unknown as RouteParams;
    const [loading, setLoading] = useState(true);
    const { state } = useLocation() as RouteState;
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();

    useEffect(() => {
        (async () => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();
            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();
            setInfo(infoData);
            setPriceInfo(priceData);
            // setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                {/*
                    url을 치고 접근할 경우 state에 값을 못받은 상태가 됨으로 에러 발생함
                    이를 방지하고자 state.name 을 state?.name || 'Loading...' 으로 변경함 
                */}
                <Title>{state?.name || 'Loading...'}</Title>
            </Header>
            {/* {loading ? <Loader>'Loading...'</Loader> : priceInfo?.quotes.USD.ath_price} */}
            {loading ? <Loader>'Loading...'</Loader> : priceInfo?.quotes.USD.ath_price}
        </Container>
    );
}

export default Coin;