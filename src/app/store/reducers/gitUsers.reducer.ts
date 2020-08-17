import { createReducer, on } from '@ngrx/store';
import { uploadUsers, uploadUsersError, uploadUsersSuccess } from '../actions';

export interface GitUsersState {
	gitUsers: [];
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
	on(uploadUsers, (state) => ({ ...state, loading: true })),

	on(uploadUsersSuccess, (state, { users }) => ({
		...state,
		loading: false,
		loaded: true,
		gitUsers: [...users],
	})),

	on(uploadUsersError, (state, { payload }) => ({
		...state,
		loading: false,
		loaded: false,
		error: payload,
	})),
);

export function gitUsersReducer(state, action) {
	return _gitUsersReducer(state, action);
}
