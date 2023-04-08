import {
    createStore,
    combineReducers
} from "redux"

import cartReducer from "./reducers/cartReducer"

const reducer=combineReducers({
    cart:cartReducer,
    
})

const store=createStore(
    reducer
);

export default store