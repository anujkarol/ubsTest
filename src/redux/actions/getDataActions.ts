import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "../constants";
import { IDataActionTypes } from "./interface";

const getData = (): IDataActionTypes => ({
  type: GET_DATA,
});

const getDataSuccess = (data: object[]): IDataActionTypes => ({
  type: GET_DATA_SUCCESS,
  data,
});

const getDataFailure = (message: string): IDataActionTypes => ({
  type: GET_DATA_FAILURE,
  message,
});

export const getDataActions = {
  getData,
  getDataSuccess,
  getDataFailure,
};
