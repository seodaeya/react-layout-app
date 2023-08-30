import {Link} from "react-router-dom";

export default function Nav () {
    return <ul>
        <li><Link to={'/'}>홈</Link></li>
        <li><Link to={'/page2'}>PAGE2</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/axios'}>Axios</Link></li>
    </ul>
}