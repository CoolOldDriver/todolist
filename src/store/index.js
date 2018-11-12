// import {createStore,applyMiddleware,compose} from 'redux';
// import reducer from './reducer';

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    
//     }) : compose;

// const store=createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
import {createStore} from 'redux';
import reducer from './reducer';



const store=createStore(
    reducer
);

export default store;