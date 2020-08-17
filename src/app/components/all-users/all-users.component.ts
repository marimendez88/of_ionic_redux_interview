import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IonList } from '@ionic/angular';

import { Store } from '@ngrx/store';

import { uploadUsers } from '../../store/actions';
import { AppState } from '../../store/app.reducer';
import { GitUsers } from '../../models/gitUsers.model';

@Component({
	selector: 'app-all-users',
	templateUrl: './all-users.component.html',
	styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	gitUsers: GitUsers[] = [];

	since: number = 0;
	pag: number = 46;
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select('gitUsers')
			.subscribe(({ gitUsers }) => (this.gitUsers = gitUsers));

		this.store.dispatch(uploadUsers({ since: this.since }));
	}
	loadData(event) {
		this.since = this.since + this.pag;
		setTimeout(() => {
			this.store
				.select('gitUsers')
				.subscribe(({ gitUsers }) => this.gitUsers.push(...gitUsers));
			event.target.complete();
		}, 300);
		this.store.dispatch(uploadUsers({ since: this.since }));
	}
}
