import {ALL_TASK, DELETE_TASK, FORM_DATA, TYPE} from '../types/Types';

const initialState = {
  firststate: [],
  formdatastate: [],
  alltaskstate: []
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        firststate: action.payload,
      };
    case FORM_DATA:
      return {
        ...state,
        formdatastate: action.payload,
      };
    case ALL_TASK:
      return {
        ...state,
        alltaskstate: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        alltaskstate: state.alltaskstate.filter(
          data => data.id !== action.payload,
        ),
      };
    default:
      return {...state};
  }
};
export default Reducers;
