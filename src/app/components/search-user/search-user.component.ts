import { Component, OnInit, ViewChild } from '@angular/core';
import { GitUsers } from '../../models/gitUsers.model';
import { IonInfiniteScroll } from '@ionic/angular';

import { UserDetail } from '../../models/userDetail.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { uploadUserDetail } from 'src/app/store/actions';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-search-user',
	templateUrl: './search-user.component.html',
	styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	gitUsers: GitUsers[] = [];
	userDetail: UserDetail = null;
	login: string;

	since: number = 0;
	pag: number = 46;

	constructor(
		private store: Store<AppState>,
		private route: ActivatedRoute,
		private iab: InAppBrowser,
	) {
		this.login = this.route.snapshot.params.id;
	}

	ngOnInit(): void {
		this.login = this.route.snapshot.params.id;
		console.log(this.login);
		this.store
			.select('userDetail')
			.subscribe(({ userDetail }) => (this.userDetail = userDetail));
		this.store.dispatch(uploadUserDetail({ loginname: this.login }));
	}

	goUser(loginname) {
		this.store
			.select('userDetail')
			.subscribe(({ userDetail }) => (this.userDetail = userDetail));
		this.store.dispatch(uploadUserDetail({ loginname }));
	}
	browserLink(blog) {
		this.iab.create(blog), `_system`;
	}
}
