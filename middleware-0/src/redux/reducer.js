import { FAILURE, REQUEST, SUCCESS } from "./action";
import { produce } from 'immer';

const initialState = {
    isLoading: false,
    isError: false,
    user: []
};

export const DataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST:
            return produce(state, original => {
                original.isLoading = true;
            });
        case SUCCESS:
            return produce(state, original => {
                original.isLoading = false;
                original.user = payload;
            });
        case FAILURE:
            return produce(state, original => {
                original.isLoading = false;
                original.isError = true;
                original.user = [];
            });
        default:
            return state;
    }
};
