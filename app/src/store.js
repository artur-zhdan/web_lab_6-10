import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const initialState = {
    items: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_ITEM:
            // filter out item with id matching payload, but only one item
            let index = state.items.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                return state;
            }
            return {
                ...state,
                items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
            };
        default:
            return state;
    }
};


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
