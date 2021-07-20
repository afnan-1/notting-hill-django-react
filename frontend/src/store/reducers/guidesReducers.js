import {
  GUIDES_LIST_FAIL,
  GUIDES_LIST_SUCCESS,
  GUIDES_LIST_REQUEST,
  GUIDES_DETAILS_FAIL,
  GUIDES_DETAILS_SUCCESS,
  GUIDES_DETAILS_REQUEST,
  GUIDES_FORM_FAIL,
  GUIDES_FORM_SUCCESS,
  GUIDES_FORM_REQUEST,
  GUIDES_TEMP_FAIL,
  GUIDES_TEMP_REQUEST,
  GUIDES_TEMP_SUCCESS,
} from "../constants/guidesConstants";

export const guidesListReducer = (state = { guideList: [] }, action) => {
  switch (action.type) {
    case GUIDES_LIST_REQUEST:
      return { loading: true };
    case GUIDES_LIST_SUCCESS:
      return { loading: false, guideList: action.payload };
    case GUIDES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const guidesDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GUIDES_DETAILS_REQUEST:
      return { loading: true };
    case GUIDES_DETAILS_SUCCESS:
      return { loading: false, guide: action.payload };
    case GUIDES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const guidesTempReducer = (state = {}, action) => {
  switch (action.type) {
    case GUIDES_TEMP_REQUEST:
      return { loadingTemp: true };
    case GUIDES_TEMP_SUCCESS:
      return { loadingTemp: false, guide: action.payload };
    case GUIDES_TEMP_FAIL:
      return { loadingTemp: false, errorTemp: action.payload };
    default:
      return state;
  }
};

export const guidesFormReducer = (state = {}, action) => {
  switch (action.type) {
    case GUIDES_FORM_REQUEST:
      return { loading: true };
    case GUIDES_FORM_SUCCESS:
      return { loading: false, success: action.payload };
    case GUIDES_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
