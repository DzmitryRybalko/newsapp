import * as types from '../constants/ActionTypes';

const initialState = {
  NewsList: [],
  filter: '',
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case types.GET_NEWS:
      return {
        ...state,
        NewsList: action.res,
      };

    case types.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default: return state;
  }
}

