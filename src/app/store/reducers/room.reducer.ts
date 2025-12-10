import { createReducer, on } from "@ngrx/store";
import { LoadRoomsAction, LoadRoomsSuccessAction, LoadRoomsFailureAction } from "../actions/room.action";
import { initialRoomState, RoomState } from "../state/room.state";

export const roomReducer = createReducer(
  initialRoomState,
  on(
    LoadRoomsAction,
    (state) => ({ ...state, isLoading: true })
  ),
  on(
    LoadRoomsSuccessAction,
    (state, { rooms }) => ({ ...state, rooms, isLoading: false })
  ),
  on(
    LoadRoomsFailureAction,
    (state) => ({ ...state, isLoading: false })
  )
);

