import * as constants from "../../redux/constants";

interface getData {
  type: typeof constants.GET_DATA;
}

interface DataSuccess {
  type: typeof constants.GET_DATA_SUCCESS;
  data: object[];
}

interface DataFailure {
  type: typeof constants.GET_DATA_FAILURE;
  message: string;
}

interface IServerCheck {
  type: typeof constants.SERVER_CHECK;
}

interface IServerUp {
  type: typeof constants.SERVER_DOWN;
  message: string;
  isServerDown: boolean;
}

interface IServerDown {
  type: typeof constants.SERVER_UP;
  message: string;
  isServerDown: boolean;
}
export type IDataActionTypes = getData | DataSuccess | DataFailure;
export type IServerActionTypes = IServerCheck | IServerUp | IServerDown;
