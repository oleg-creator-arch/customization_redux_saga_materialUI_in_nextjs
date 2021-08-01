// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import store from './app/store'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { helloSaga } from './sagas'
//
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(helloSaga)
//
// const action = type => store.dispatch({type})
//
// function render() {
//     ReactDOM.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={() => action('INCREMENT')}
//             onDecrement={() => action('DECREMENT')}
//             onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
//         document.getElementById('root')
//     )
// }
// const sagaMiddleware = createSagaMiddleware()
// sagaMiddleware.run(rootSaga.js)
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

// import ReactDOM from "react-dom";
// import { StrictMode } from "react";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
//
// import App from "./App";
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//     <StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </StrictMode>,
//     rootElement
// );

