import { getDataActions } from "./../actions/getDataActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store";
import { IDataActionTypes } from "../actions/interface";
import UBS from "../../pages/UBS";

const mapStateToProps = (state: AppState) => ({
  data: state.getDataReducer.data,
  isDataLoading: state.getDataReducer.isDataLoading,
  isServerDown: state.serverReducer.isServerDown,
});
const mapDispatchToProps = (dispatch: Dispatch<IDataActionTypes>) => ({
  getData: () => dispatch(getDataActions.getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UBS);
