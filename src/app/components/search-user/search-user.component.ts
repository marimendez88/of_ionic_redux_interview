import { Component, OnInit, ViewChild } from '@angular/core';
import { GitUsers } from '../../models/gitUsers.model';
import { IonInfiniteScroll } from '@ionic/angular';

import { UserDetail } from '../../models/userDetail.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { uploadUserDetail } from 'src/app/store/actions';

@Component({
	selector: 'app-search-user',
	templateUrl: './search-user.component.html',
	styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	// gitusers: GitUsers[] = [];
	// uniqueUser: UserDetail[] = [];

	// id_user: number = 0;
	// pagination: number = 46;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		// this.dataService.getUsers(this.id_user).subscribe((s_gitusers) => {
		// 	this.gitusers = s_gitusers;
		// });
	}
	loadData(event) {
		// setTimeout(() => {
		// 	this.id_user = this.id_user + this.pagination;
		// 	this.dataService.getUsers(this.id_user).subscribe((s_gitusers) => {
		// 		this.gitusers.push(...s_gitusers);
		// 	});
		// 	event.target.complete();
		// }, 500);
	}

	goUser(event) {
		this.store.dispatch(uploadUserDetail(event.detail.value));
		console.log(event.detail.value);
	}
}
