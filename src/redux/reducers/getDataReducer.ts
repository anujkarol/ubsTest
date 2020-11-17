import { IDataActionTypes } from "../actions/interface";
import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "../constants";

const initialState: any = {
  data: [],
  isDataLoading: false,
};

const getDataReducer = (state = initialState, action: IDataActionTypes) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isDataLoading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isDataLoading: false,
        data: action.data,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isDataLoading: false,
        data: [],
        message: action.message,
      };

    default:
      return state;
  }
};

export default getDataReducer;
