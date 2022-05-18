// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

interface IRouterProps {
}

// export default function Router() {
function Router({}: IRouterProps) {
    return (
        <BrowserRouter>
            {/* react-router-dom v5.3.0 */}
            {/* <Switch>
                <Route path={'/'}>
                    <Coins/>
                </Route>
                <Route path={'/:coinId'}>
                    <Coin/>
                </Route>
            </Switch> */}

            {/* react-router-dom v6.3.0 */}
            <Routes>
                <Route path='/' element={<Coins />} />
                <Route path='/:coinId' element={<Coin />}>
                    <Route path={`price`} element={<Price />}/>
                    <Route path={`chart`} element={<Chart />}/>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Router;