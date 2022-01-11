import { combineReducers } from "redux";
import authReducer from "../../containers/Admin/Auth/modules/reducer";
import listUserReducer from "../../containers/Admin/Users/modules/reducer";
import addUserReducer from "../../containers/Admin/Users/function/add/modules/reducer";
import deleteUserReducer from "../../containers/Admin/Users/function/delete/modules/reducer";
import updateUserReducer from "../../containers/Admin/Users/function/update/modules/reducer";
import editUserReducer from "../../containers/Admin/Users/function/update/_modules/reducer";
import listJobReducer from "../../containers/Admin/Job/modules/reducer";
import addJobReducer from "../../containers/Admin/Job/function/add/modules/reducer";
import deleteJobReducer from "../../containers/Admin/Job/function/delete/modules/reducer";
import updateJobReducer from "../../containers/Admin/Job/function/update/modules/reducer";
import editJobReducer from "../../containers/Admin/Job/function/update/_modules/reducer";
import addCommentReducer from "../../containers/Admin/Comment/function/add/modules/reducer";

const rootReducer = combineReducers({
  authReducer,
  listUserReducer,
  addUserReducer,
  deleteUserReducer,
  updateUserReducer,
  editUserReducer,
  listJobReducer,
  addJobReducer,
  deleteJobReducer,
  updateJobReducer,
  editJobReducer,
  addCommentReducer,
});

export default rootReducer;
