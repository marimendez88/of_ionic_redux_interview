import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as gitUsersActions from '../actions/gitUsers.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { GitUsers } from '../../models/gitUsers.model';

@Injectable()
export class GitUsersEffects {
	constructor(private actions$: Actions, private userService: UserService) {}

	id_user: number = 0;

	uploadUsers$: any = createEffect((): any =>
		this.actions$.pipe(
			ofType(gitUsersActions.uploadUsers),
			mergeMap(() =>
				this.userService
					.getUsers(this.id_user)
					.pipe(
						map((gitUsers) => gitUsersActions.uploadUsersSuccess({ gitUsers })),
					),
			),
		),
	);
}
