import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from 'redux';
import reducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    // middleware: [
    //     sagaMiddleware,
    // ],
    applyMiddleware(sagaMiddleware)
);
//store.sagaTask = sagaMiddleware.run(rootSaga)
sagaMiddleware.run(rootSaga)
//export default store;