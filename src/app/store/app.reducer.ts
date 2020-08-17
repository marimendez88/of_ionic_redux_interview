import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
	gitUsers: reducers.GitUsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
	gitUsers: reducers.gitUsersReducer,
};
