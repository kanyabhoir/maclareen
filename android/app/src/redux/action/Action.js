import { ALL_TASK, DELETE_TASK, FORM_DATA, TYPE } from "../types/Types";


export const SetData = data => {
    return {
      type: TYPE,
      payload: data,
    };
  };
export const SetFormData = data => {
    return {
      type: FORM_DATA,
      payload: data,
    };
  };
export const AllTaskData = data => {
    return {
      type: ALL_TASK,
      payload: data,
    };
  };
export const DeleteTaskData = data => {
    return {
      type: DELETE_TASK,
      payload: data,
    };
  };