import todoReducer from "./todo/todoReducer";
import filterReducer from "./filter/filterReducer";
import { combineReducers , legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    todo: todoReducer,
    filters: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools())

export default store;