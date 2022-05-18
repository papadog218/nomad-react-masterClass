// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

interface IRouterProps {
    toggleDark: () => void;
    isDark: boolean;
}

// export default function Router() {
function Router({toggleDark, isDark}: IRouterProps) {
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
                <Route path='/' element={<Coins isDark={isDark} toggleDark={toggleDark} />} />
                <Route path='/:coinId' element={<Coin isDark={isDark} />}>
                    <Route path={`price`} element={<Price />}/>
                    <Route path={`chart`} element={<Chart />}/>
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Router;