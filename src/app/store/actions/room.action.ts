import { createAction, props } from "@ngrx/store";
import { Room } from "../../model/room.model";

export const roomActionTypes = {
  LOAD_ROOMS: '[Room] Load Rooms',
  LOAD_ROOMS_SUCCESS: '[Room] Load Rooms Success',
  LOAD_ROOMS_FAILURE: '[Room] Load Rooms Failure',
}

export const LoadRoomsAction = createAction(
  roomActionTypes.LOAD_ROOMS
);

export const LoadRoomsSuccessAction = createAction(
  roomActionTypes.LOAD_ROOMS_SUCCESS,
  props<{ rooms: Room[] }>()
);

export const LoadRoomsFailureAction = createAction(
  roomActionTypes.LOAD_ROOMS_FAILURE,
  props<{ error: any }>()
);

