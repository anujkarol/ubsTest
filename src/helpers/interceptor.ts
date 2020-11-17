import axios, { AxiosInstance } from "axios";
import { GLOBAL_CONFIG, API_URL } from "./global";
import { AppState, store } from "../redux/store";
import { serverCheckAction } from "../redux/actions/serverCheckAction";

export const instance: AxiosInstance = axios.create({
  timeout: GLOBAL_CONFIG.API_TIMEOUT,
  baseURL: API_URL,
  headers: { Pragma: "no-cache" },
});

instance.interceptors.response.use(
  function(response) {
    const appState: AppState = store.getState();
    const serverCheck: boolean = appState.serverReducer.isServerDown;

    if (serverCheck) {
      store.dispatch(
        serverCheckAction.serverUpAction("Server UP from  INTERCEPTOR Response")
      );
    }

    return response;
  },
  (error) => {
    const ifServerError =
      error.response.status > 401 && error.response.status <= 500;

    if (ifServerError) {
      throw new Error("Server Returned 505");
    }
    return Promise.reject(error.response.status);
  }
);
