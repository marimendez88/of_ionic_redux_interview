import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { AllUsersComponent } from '../components/all-users/all-users.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
	imports: [IonicModule, CommonModule, FormsModule, Tab1PageRoutingModule],
	declarations: [Tab1Page, AllUsersComponent],
})
export class Tab1PageModule {}
