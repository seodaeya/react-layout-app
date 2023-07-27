import axios from "axios";
import {useState} from "react";

export default function Axios () {

    // get
    const [getResult, setGetResult] = useState('');
    // post
    const [postResult, setPostResult] = useState('');
    const [userList, setUserList] = useState('');

    /** axios get */
    const get = () => {
        const params = new URLSearchParams({
            'param1':'value1',
            'param2':'value2'
        });
        axios.get('/api/get' + (params ? `?${params.toString()}` : ''))
            .then(res => {
                console.log(res);
                const {data} = res.data;
                setGetResult(data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    /** axios post */
    const post = () => {
        let params = {
            param1: 'value1',
            param2: 'value2'
        }
        axios.post('/api/post', params)
            .then(res => {
                console.log(res);
                const {data} = res.data;
                setPostResult(data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    /**
     * axios post
     */
    const getUserList = () => {
        axios.post('/v1/user/manage/search',{})
            .then(res => {
                console.log(res);
                const {data} = res.data;
                setUserList(JSON.stringify(data));
            })
            .catch(e => {
                console.log(e);
            })
    }

    return <>
        <h1>Hello, Axios!</h1>
        <div>
            <h2>Post get user list</h2>
            <button onClick={getUserList}>사용자 목록 조회</button>
            {userList && <ul>{ JSON.parse(userList).map(user =>
                <li key={user.usrId}>
                    {user.usrId + '/' + user.usrNm}
                </li>
            )}</ul>}
        </div>
        <div>
            <h2>Get</h2>
            <button onClick={get}>get</button>
            <p>{getResult}</p>
        </div>
        <div>
            <h2>Post</h2>
            <button onClick={post}>post</button>
            <p>{postResult}</p>
        </div>
    </>
}