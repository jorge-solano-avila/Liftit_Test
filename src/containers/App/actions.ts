import { SERVICE_CREATED_SUCCESSFULLY, SET_SOURCE_LOCATION, SET_DESTINATION_LOCATION, SET_DISTANCE } from "./constants";
import { Distance } from "./index";

export const serviceCreatedSuccessfully = () => {
  return {
    type: SERVICE_CREATED_SUCCESSFULLY
  }
}

export const setSourceLocation = (sourceLocation: any) => {
  return {
    type: SET_SOURCE_LOCATION,
    sourceLocation
  }
}

export const setDestinationLocation = (destinationLocation: any) => {
  return {
    type: SET_DESTINATION_LOCATION,
    destinationLocation
  }
}

export const setDistance = (distance: Distance | null) => {
  return {
    type: SET_DISTANCE,
    distance
  }
}