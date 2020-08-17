import { Component, OnInit, ViewChild } from '@angular/core';
import { GitUsers } from '../../models/gitUsers.model';
import { IonInfiniteScroll } from '@ionic/angular';

import { UserDetail } from '../../models/userDetail.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { uploadUserDetail } from 'src/app/store/actions';
import { uploadUsers } from '../../store/actions/gitUsers.actions';

@Component({
	selector: 'app-search-user',
	templateUrl: './search-user.component.html',
	styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	// gitusers: GitUsers[] = [];
	// uniqueUser: UserDetail[] = [];

	gitUsers: GitUsers[] = [];
	userDetail: UserDetail = null;
	loginname: String = '';

	since: number = 0;
	pag: number = 46;
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {}
	loadData(event) {}

	goUser(loginname) {
		console.log(loginname);
		this.store
			.select('userDetail')
			.subscribe(({ userDetail }) => (this.userDetail = userDetail));
		this.store.dispatch(uploadUserDetail({ loginname }));
	}
}
