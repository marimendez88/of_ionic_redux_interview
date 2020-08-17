import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { UserDetailState } from './reducers/userDetail.reducer';

export interface AppState {
	gitUsers: reducers.GitUsersState;
	userDetail: reducers.UserDetailState;
}

export const appReducers: ActionReducerMap<AppState> = {
	gitUsers: reducers.gitUsersReducer,
	userDetail: reducers.userDetailReducer,
};
