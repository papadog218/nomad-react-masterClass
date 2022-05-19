import { Link, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const TopMenuWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 480px;
    margin: 20px auto 0 auto;
    button {
        background-color: initial;
        border: 0;
        font-size: 24px;
        &:hover {
            cursor: pointer;
        }
    }
`;

// interface TopMenuState {
//     // state: {pathname: string};
//     pathName: string;
// }

function TopMenu() {

    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

    // const {pathName} = useLocation() as TopMenuState;
    // console.log(pathName.pathname.toString());

    return (
        <TopMenuWrap>
            {/* {pathName?.pathname = '/' ? <></> : <Link to={`/`}>&larr;</Link>} */}
            <Link to={`/`}>&larr;</Link>
            <button onClick={toggleDarkAtom}>{isDark ? `🌞` : `🌙`}</button>
        </TopMenuWrap>
    );
}

export default TopMenu;