import { SERVER_UP, SERVER_DOWN, SERVER_CHECK } from '../constants';
import { IServerActionTypes } from './interface';

const serverCheck = (): IServerActionTypes => ({ type: SERVER_CHECK });
const serverDownAction = (message: string): IServerActionTypes => ({
  type: SERVER_DOWN,
  message,
  isServerDown: true,
});

const serverUpAction = (message: string): IServerActionTypes => ({
  type: SERVER_UP,
  message,
  isServerDown: false,
});

export const serverCheckAction = {
  serverCheck,
  serverDownAction,
  serverUpAction,
};
