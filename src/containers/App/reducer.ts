import { SERVICE_CREATED_SUCCESSFULLY, SET_SOURCE_LOCATION, SET_DESTINATION_LOCATION, SET_DISTANCE } from "./constants";
import { Distance } from "./index";

export interface AppState {
  serviceCreated: boolean;
  sourceLocation: any;
  destinationLocation: any;
  distance: Distance | null;
}

const initialState: AppState = {
  serviceCreated: false,
  sourceLocation: null,
  destinationLocation: null,
  distance: null
};

const appReducer = (
  state: AppState = initialState,
  action: any
): AppState => {
  switch (action.type) {
    case SERVICE_CREATED_SUCCESSFULLY:
      return Object.assign({}, state, { serviceCreated: true });
    case SET_SOURCE_LOCATION:
      return Object.assign({}, state, { sourceLocation: action.sourceLocation });
    case SET_DESTINATION_LOCATION:
      return Object.assign({}, state, { destinationLocation: action.destinationLocation });
    case SET_DISTANCE:
      return Object.assign({}, state, { distance: action.distance });
    default:
      return state;
  }
};

export default appReducer;
