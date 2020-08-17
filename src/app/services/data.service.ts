import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitUsers } from '../models/gitUsers.model';
import { UserDetail } from '../models/userDetail.model';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor(private http: HttpClient) {}

	private url = 'http://api.github.com';
	getUsers(id: number) {
		if (id === 0) {
			return this.http.get<GitUsers[]>(`${this.url}/users`);
		}
		return this.http.get<GitUsers[]>(`${this.url}/users?since=${id}`);
	}

	getUniqueUser(loginname) {
		return this.http.get<UserDetail[]>(`${this.url}/users/${loginname}`);
	}
}
