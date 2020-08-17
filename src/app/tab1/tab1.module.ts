import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { AllUsersComponent } from '../components/all-users/all-users.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../store/app.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from '../store/effects/index';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		Tab1PageRoutingModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot(EffectsArray),

		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	declarations: [Tab1Page, AllUsersComponent],
})
export class Tab1PageModule {}
