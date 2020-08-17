import { createReducer, on } from '@ngrx/store';
import {
	uploadUserDetail,
	uploadUserDetailError,
	uploadUserDetailSuccess,
} from '../actions';
import { UserDetail } from '../../models/userDetail.model';

export interface UserDetailState {
	loginname: string;
	userDetail: UserDetail;
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const UserDetaiInitialState: UserDetailState = {
	loginname: null,
	userDetail: null,
	loaded: false,
	loading: false,
	error: null,
};

const _userDetailReducer = createReducer(
	UserDetaiInitialState,
	on(uploadUserDetail, (state, { loginname }) => ({
		...state,
		loading: true,
		loginname,
	})),

	on(uploadUserDetailSuccess, (state, { userDetail }) => ({
		...state,
		loading: false,
		loaded: true,
		userDetail: { ...userDetail },
	})),

	on(uploadUserDetailError, (state, { payload }) => ({
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

export function userDetailReducer(state, action) {
	return _userDetailReducer(state, action);
}
