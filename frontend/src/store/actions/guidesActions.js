import axiosInstance from "../../axios";

import {
  GUIDES_LIST_SUCCESS,
  GUIDES_LIST_FAIL,
  GUIDES_LIST_REQUEST,
  GUIDES_DETAILS_REQUEST,
  GUIDES_DETAILS_FAIL,
  GUIDES_DETAILS_SUCCESS,
  GUIDES_FORM_REQUEST,
  GUIDES_FORM_FAIL,
  GUIDES_FORM_SUCCESS,
  GUIDES_TEMP_REQUEST,
  GUIDES_TEMP_FAIL,
  GUIDES_TEMP_SUCCESS,

} from "../constants/guidesConstants";
export const listGuides = () => async (dispatch) => {
  try {
    dispatch({ type: GUIDES_LIST_REQUEST });
    const { data } = await axiosInstance.get("/guides/pdf/");
    dispatch({ type: GUIDES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GUIDES_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listGuidesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GUIDES_DETAILS_REQUEST });
    const { data } = await axiosInstance.get(`/guides/pdf/${id}/`);
    dispatch({ type: GUIDES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GUIDES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const tempGuidesDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GUIDES_TEMP_REQUEST });
    const { data } = await axiosInstance.get(`/guides/tempguide/`);
    dispatch({ type: GUIDES_TEMP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GUIDES_TEMP_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addGuidesForm = (body) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userInfo.access}`
      }
  }
    dispatch({ type: GUIDES_FORM_REQUEST });
    const { data } = await axiosInstance.post(
      `/guides/addguideform/`,
      body,
      config
    );
    dispatch({ type: GUIDES_FORM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GUIDES_FORM_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
