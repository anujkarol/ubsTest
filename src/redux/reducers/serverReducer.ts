import { IServerReducerState } from './interface';
import { SERVER_DOWN, SERVER_UP, SERVER_CHECK } from '../constants';
import { IServerActionTypes } from '../actions/interface';

const initialState: IServerReducerState = {
  isServerDown: false,
  message: '',
};

const serverReducer = (state = initialState, action: IServerActionTypes) => {
  switch (action.type) {
    case SERVER_CHECK:
      return {
        ...state,
      };
    case SERVER_DOWN:
      return {
        ...state,
        isServerDown: action.isServerDown,
        message: action.message,
      };
    case SERVER_UP:
      return {
        ...state,
        isServerDown: action.isServerDown,
        message: 'Server Down from Reducer',
      };
    default:
      return state;
  }
};

export default serverReducer;
