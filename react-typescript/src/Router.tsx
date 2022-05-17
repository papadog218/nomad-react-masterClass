// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Coins';

// export default function Router() {
function Router() {
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
                <Route path='/' element={<Coins/>}></Route>
                <Route path='/:coinId' element={<Coin/>}></Route>
            </Routes>

        </BrowserRouter>
    );
}

export default Router;