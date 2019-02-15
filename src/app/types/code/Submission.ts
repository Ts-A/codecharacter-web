import { SubmissionActions } from 'app/actions';
import { ActionType } from 'typesafe-actions';

const actions = {
  changeCurrentRequest: SubmissionActions.changeCurrentRequest,
  changeState: SubmissionActions.changeState,
  updateMapId: SubmissionActions.updateMapId,
};

export enum Request {
  NONE = 'NONE',
  SELF_MATCH = 'SELF_MATCH',
  PREVIOUS_COMMIT_MATCH = 'PREVIOUS_COMMIT_MATCH',
  LOCK_CODE = 'LOCK_CODE',
}

export enum RequestState {
  COMPILE_PREVIOUS_COMMIT_CODE = 'COMPILE_PREVIOUS_COMMIT_CODE',
  COMPILE_CURRENT_CODE = 'COMPILE_CURRENT_CODE',
  EXECUTE_PREVIOUS_COMMIT_MATCH = 'EXECUTE_PREVIOUS_COMMIT_MATCH',
  EXECUTE_SELF_MATCH = 'EXECUTE_SELF_MATCH',
  IDLE = 'IDLE',
}

export interface SubmissionStoreState {
  request: Request;
  state: RequestState;
  mapId: number;
}

export type SubmissionStoreAction = ActionType<typeof actions>;