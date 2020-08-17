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

	id_user: number = 0;
	pag: number = 46;
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select('gitUsers')
			.subscribe(({ gitUsers }) => (this.gitUsers = gitUsers));

		this.store.dispatch(uploadUsers());
	}
	loadData(event) {
		setTimeout(() => {
			this.store
				.select('gitUsers')
				.subscribe(({ gitUsers }) => this.gitUsers.push(...gitUsers));
			event.target.complete();
		}, 500);
		this.id_user = this.id_user + this.pag;
		this.store.dispatch(uploadUsers());
	}
}
