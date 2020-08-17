import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GitUsers } from '../../models/gitUsers.model';

import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-all-users',
	templateUrl: './all-users.component.html',
	styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	gitusers: GitUsers[] = [];
	id_user: number = 0;
	pagination: number = 46;
	constructor(public dataService: DataService) {}

	ngOnInit(): void {
		this.dataService.getUsers(this.id_user).subscribe((s_gitusers) => {
			this.gitusers = s_gitusers;
		});
	}
	loadData(event) {
		setTimeout(() => {
			this.id_user = this.id_user + this.pagination;
			this.dataService.getUsers(this.id_user).subscribe((s_gitusers) => {
				this.gitusers.push(...s_gitusers);
			});
			event.target.complete();
		}, 500);
	}
}
