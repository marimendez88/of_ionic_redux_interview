import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SearchUserComponent } from '../components/search-user/search-user.component';
import { appReducers } from '../store/app.reducer';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from '../store/effects/index';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		Tab2PageRoutingModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot(EffectsArray),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	declarations: [Tab2Page, SearchUserComponent],
})
export class Tab2PageModule {}
