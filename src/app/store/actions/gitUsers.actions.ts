import { createAction, props } from '@ngrx/store';
import { GitUsers } from '../../models/gitUsers.model';

export const uploadUsers = createAction('[GitUsers] uploadUsers');

export const uploadUsersSuccess = createAction(
	'[GitUsers] uploadUsersSuccess',
	props<{ users: GitUsers[] }>(),
);

export const uploadUsersError = createAction(
	'[GitUsers] uploadUsersError',
	props<{ payload: any }>(),
);
