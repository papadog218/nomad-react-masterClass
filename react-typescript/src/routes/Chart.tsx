import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartProps {
    coinId: string;
}

function Chart() {
    // 이미 Coin.tsx에서 props를 넘겨주는 방식을 사용할 것
    // const parms = useParams();
    // console.log(parms);

    const {coinId} = useOutletContext<ChartProps>();
    const {isLoading, data} = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId));
    return (
        <h1>chart</h1>
    );
}

export default Chart;