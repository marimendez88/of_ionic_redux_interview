import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitUsers } from '../models/gitUsers.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	private url = 'http://api.github.com';
	getUsers(since: number) {
		if (since === 0) {
			return this.http.get<GitUsers[]>(`${this.url}/users`);
		}
		return this.http.get<GitUsers[]>(`${this.url}/users?since=${since}`);
	}

	getUniqueUser(loginname) {
		return this.http.get<GitUsers[]>(`${this.url}/users/${loginname}`);
	}
}
