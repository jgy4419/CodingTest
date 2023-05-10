import axios from 'axios';

const BASE_URL = 'http://localhost:3000'
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

/* 
    1. 요청 인터셉터, 2개의 콜백 함수를 받는다.
    - request는 요청 직전에 검사하는 코드.
*/
instance.interceptors.request.use(
    function(config){
        // 요청 성공 직전 호출.
        // axios 설정 값을 넣어주기. (사용자 정의 설정도 추가 가능.)

        // redux에서 토큰 가져오기.
        const token = store.getState().Auth.token;
        try {
            // 유효한 토큰이 있다면? headers에 토큰과 함께 추가 세팅해주기.
            if(token && jwtUtils.isAuth(token)) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
            // 토큰이 없으면
        } catch(error) {
            // 에러 띄우기.
            console.error('[_axios.ionterceptors.request] config : ' + err);
        }
        return config;
    },
    function (error) {
        // 요청 에러 직전 호출된다.
        return Promise.reject(error);
    }
);

/* 
    2. 응답 인터셉터. 2개의 콜백 함수를 받는다.
    - response는 요청 후 처리.
*/
instance.interceptors.response.use(
    function(response){
    /* 
        http status가 200인 경우 응답 성공 직전 호출된다.
        .then() 으로 이어진다.
    */
        return response;
    },
    function(error) {
    /* 
        http status가 200이 아닌 경우 응답 에러 직전 호출된다.
        .catch()으로 이어진다.
    */
        return Promise.reject(error);
    }
)

export default instance;

// 아래처럼 사용가능하다.

import api from '../../utils/api';

// ...

const addBoard = async (board) => {
    // api.호출할 http 메서드(api url, 요청 시 보낼 데이터)
    const res = await api.post('/api/board', board);
    console.log(res);
}