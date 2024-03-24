// reducer.js
import { produce } from 'immer';
import { FAILURE, REQUEST, SUCCESS } from './action';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAILURE:
      return produce(state, (original) => {
        original.isLoading = false;
        original.isError = true;
        original.data = [];
      });
    case REQUEST:
      return produce(state, (original) => {
        original.isLoading = true;
      });
    case SUCCESS:
      return produce(state, (original) => {
        original.isLoading = false;
        original.data = payload; // Updated payload to correct data received from the API
      });
    default:
      return state;
  }
};
