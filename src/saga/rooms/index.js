import { takeLatest, call, put } from "redux-saga/effects";
import { roomsRequested, roomSucceeded, roomsFailed} from "../../redux/slices/rooms";
import {fetchRoom} from "./api";

function* roomsRequest() {
    try {
        const response = yield  call(fetchRoom, { example: 'a'});
        yield put(roomSucceeded({room: response}));


    } catch (error) {
        yield put(roomsFailed({error}));
    }
}

function* rooms() {
    yield takeLatest( roomsRequested, roomsRequest);
}
export default rooms;