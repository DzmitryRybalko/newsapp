import * as types from '../constants/ActionTypes';

const initialState = {
  NewsList: [],
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        NewsList: action.res,
      };

    default: return state;
  }
}
