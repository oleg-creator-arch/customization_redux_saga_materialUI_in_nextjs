import {all} from "redux-saga/effects";
import rooms from "./rooms";

function* rootSaga() {
    yield all([
        rooms()
    ])
}

export default rootSaga;