import {useDispatch, useSelector} from 'react-redux';
import {selectIsAuth, setAuthKey} from "../store/reducers/authSlice";

export default function Login () {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    let text = isAuth ? '로그아웃' : '로그인';
    return <button onClick={() => dispatch(setAuthKey(!isAuth ? 'key' : null))}>{text}</button>
}