import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(
    rootReducer
)

export default store;
export type RootState = ReturnType<typeof store.getState>