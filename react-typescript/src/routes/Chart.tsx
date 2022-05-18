import ReactApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart() {
    // 이미 Coin.tsx에서 props를 넘겨주는 방식을 사용할 것
    // const parms = useParams();
    // console.log(parms);

    const {coinId} = useOutletContext<ChartProps>();
    const {isLoading, data} = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId));

    return (
        <div>
            {
                isLoading ? 'Loading chart..' :
                    <ReactApexChart
                        type="line"
                        series={[
                            {
                                name: "Price",
                                data: data?.map((price) => price.close) as number[],
                            },
                        ]}
                        options={{
                            theme: {
                                mode: "dark",
                            },
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                show: false,
                                },
                                background: "transparent",
                            },
                            grid: { show: false },
                            stroke: {
                                curve: "smooth",
                                width: 4,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false },
                                type: 'datetime',
                                categories: data?.map((price) => price.time_close) as string[],
                            },
                            fill: {
                                type: 'gradient',
                                gradient: {gradientToColors: ['#0be881'], stops: [0, 100]}
                            },
                            colors: ['#0fbcf9'],
                            tooltip: {
                                y: {
                                    formatter: (val) => `$${val.toFixed(2)}`,
                                }
                            },
                        }}
                    />
                    // <ReactApexChart
                    //     type="line"
                    //     series={[
                    //         {
                    //             name: "Price",
                    //             data: data?.map((price) => price.close) as number[],
                    //         },
                    //     ]}
                    //     options={{
                    //         theme: {
                    //             mode: "dark",
                    //         },
                    //         chart: {
                    //             height: 300,
                    //             width: 500,
                    //             toolbar: {
                    //             show: false,
                    //             },
                    //             background: "transparent",
                    //         },
                    //         grid: { show: false },
                    //         stroke: {
                    //             curve: "smooth",
                    //             width: 4,
                    //         },
                    //         yaxis: {
                    //             show: false,
                    //         },
                    //         xaxis: {
                    //             axisBorder: { show: false },
                    //             axisTicks: { show: false },
                    //             labels: { show: false },
                    //             type: 'datetime',
                    //             categories: data?.map((price) => price.time_close) as string[],
                    //         },
                    //         fill: {
                    //             type: 'gradient',
                    //             gradient: {gradientToColors: ['blue'], stops: [0, 100]}
                    //         },
                    //         colors: ['red'],
                    //         tooltip: {
                    //             y: {
                    //                 formatter: (val) => `$${val.toFixed(2)}`,
                    //             }
                    //         },
                    //     }}
                    // />
            }
        </div>
    );
}

export default Chart;