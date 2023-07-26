import { useSelector } from 'react-redux';
import {selectIsAuth} from "../store/reducers/authSlice";

export default function Header () {
    const isAuth = useSelector(selectIsAuth);
    return <>
        <header>
            <h1>Header</h1>
            <h2>{isAuth ? '로그인됨' : ''}</h2>
        </header>
    </>
}