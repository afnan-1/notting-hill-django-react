import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userForgotPasswordReducer,
  userLoginReducer,
  userResetPasswordReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import {
  guidesDetailsReducer,
  guidesFormReducer,
  guidesListReducer,
  guidesTempReducer,
} from "./reducers/guidesReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userForgotPassword: userForgotPasswordReducer,
  userResetPassword: userResetPasswordReducer,
  userRegister: userRegisterReducer,

  guidesList: guidesListReducer,
  guidesDetails: guidesDetailsReducer,
  guidesForm: guidesFormReducer,
  guidesTemp: guidesTempReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
