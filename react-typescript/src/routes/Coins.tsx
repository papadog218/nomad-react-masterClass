import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: #fff;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        transition: color .2s ease-in;
        padding: 20px;
        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(porps) => porps.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 10px;
`;

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    // const [coins, setCoins] = useState<CoinInterface[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     (async () => {
    //         const res =  await fetch('https://api.coinpaprika.com/v1/coins');
    //         const json = await res.json();
    //         setCoins(json.slice(0, 100));
    //         setLoading(false);
    //     })();
    // }, []);

    const {isLoading, data} = useQuery<ICoin[]>('allCoins',fetchCoins);

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {isLoading ? <Loader>'Loading...'</Loader>
            : (
                <CoinsList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            {/* a를 쓰면 새로고침이 되니깐 안되게하려고 <Link>를 사용함 */}
                            <Link to={`/${coin.id}`} state={{name: coin.name}}>
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

export default Coins;