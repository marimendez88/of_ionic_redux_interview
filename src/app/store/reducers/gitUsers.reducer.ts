import { createReducer, on } from '@ngrx/store';
import { uploadUsers, uploadUsersError, uploadUsersSuccess } from '../actions';
import { GitUsers } from '../../models/gitUsers.model';

export interface GitUsersState {
	gitUsers: GitUsers[];
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const GitUsersInitialState: GitUsersState = {
	gitUsers: [],
	loaded: false,
	loading: false,
	error: null,
};

const _gitUsersReducer = createReducer(
	GitUsersInitialState,
	on(uploadUsers, (state, { since }) => ({
		...state,
		loading: true,
		since: since,
	})),

	on(uploadUsersSuccess, (state, { gitUsers }) => ({
		...state,
		loading: false,
		loaded: true,
		gitUsers: state.gitUsers.concat(...gitUsers),
	})),

	on(uploadUsersError, (state, { payload }) => ({
		...state,
		loading: false,
		loaded: false,
		error: {
			url: payload.url,
			name: payload.name,
			message: payload.message,
		},
	})),
);

export function gitUsersReducer(state, action) {
	return _gitUsersReducer(state, action);
}
