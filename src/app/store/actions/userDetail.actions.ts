import { createAction, props } from '@ngrx/store';
import { UserDetail } from '../../models/userDetail.model';

export const uploadUserDetail = createAction(
	'[userDetail] uploadUserDetail',
	props<{ loginname: string }>(),
);

export const uploadUserDetailSuccess = createAction(
	'[UserDetail] uploadUserDetailSuccess',
	props<{ userDetail: UserDetail }>(),
);

export const uploadUserDetailError = createAction(
	'[UserDetail] uploadUserDetailError',
	props<{ payload: any }>(),
);
