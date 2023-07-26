import {Link} from "react-router-dom";

export default function Nav () {
    return <>
        <Link to={'/'}>홈</Link>/
        <Link to={'/page2'}>PAGE2</Link>/
        <Link to={'/login'}>Login</Link>
    </>
}