import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // SessionStorage or /session 제거 시, LocalStorage 사용

import auth from "./authSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"], // reducer 중 auth만 store에 저장한다.
    // blacklist: [제외목록]
};

const rootReducer = combineReducers({
    auth,
    // TODO add
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;