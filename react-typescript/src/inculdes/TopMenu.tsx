import { Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const TopMenuWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 480px;
    margin: 0 auto;
`;

// interface TopMenuState {
//     // state: {pathname: string};
//     pathName: string;
// }

function TopMenu() {

    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

    // const {pathName} = useLocation() as TopMenuState;
    // console.log(pathName.pathname.toString());

    return (
        <TopMenuWrap>
            {/* {pathName?.pathname = '/' ? <></> : <Link to={`/`}>&larr;</Link>} */}
            <Link to={`/`}>&larr;</Link>
            <button onClick={toggleDarkAtom}>modeBtn</button>
        </TopMenuWrap>
    );
}

export default TopMenu;