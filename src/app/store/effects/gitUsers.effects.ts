import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as gitUsersActions from '../actions/gitUsers.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { GitUsers } from '../../models/gitUsers.model';
import { of } from 'rxjs';

@Injectable()
export class GitUsersEffects {
	constructor(private actions$: Actions, private userService: UserService) {}

	uploadUsers$: any = createEffect((): any =>
		this.actions$.pipe(
			ofType(gitUsersActions.uploadUsers),
			mergeMap((action) =>
				this.userService.getUsers(action.since).pipe(
					map((gitUsers) => gitUsersActions.uploadUsersSuccess({ gitUsers })),
					catchError((err) =>
						of(gitUsersActions.uploadUsersError({ payload: err })),
					),
				),
			),
		),
	);
}
