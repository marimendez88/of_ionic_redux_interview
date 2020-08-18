import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userDetailActions from '../actions/userDetail.actions';
import { mergeMap, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserDetailsEffects {
	constructor(private actions$: Actions, private userService: UserService) {}

	uploadUserDetail$: any = createEffect((): any =>
		this.actions$.pipe(
			ofType(userDetailActions.uploadUserDetail),
			mergeMap((action) =>
				this.userService
					.getUniqueUser(action.login)
					.pipe(
						map((userDetail) =>
							userDetailActions.uploadUserDetailSuccess({ userDetail }),
						),
					),
			),
		),
	);
}
