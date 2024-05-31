import ProgressBarReducer from './ProgressBarReducer';
import GeneratePostsReducer from './generatePostsReducer';

import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    ProgressBarReducer,
    GeneratePostsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;