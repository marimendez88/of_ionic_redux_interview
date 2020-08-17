import { ActionReducerMap } from '@ngrx/store';
import * as reducer from './reducers';
import { GitUsersState } from './reducers/gitUsers.reducer';


export interface AppState {
   gitUsers: reducer.GitUsersState 
}



export const appReducers: ActionReducerMap<AppState> = {
   todos: ,
}