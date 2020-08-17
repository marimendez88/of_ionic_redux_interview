import { createAction, props } from '@ngrx/store';
import { GitUsers } from '../../models/gitUsers.model';

export const uploadUsers = createAction(
	'[GitUsers] uploadUsers',
	props<{ since: number; gitUsers: GitUsers[] }>(),
);

export const uploadUsersSuccess = createAction(
	'[GitUsers] uploadUsersSuccess',
	props<{ gitUsers: GitUsers[] }>(),
);

export const uploadUsersError = createAction(
	'[GitUsers] uploadUsersError',
	props<{ payload: any }>(),
);
