import { NgModule } from '@angular/core';
import { ComponentModule } from '../components/component.module';
import { SharedModule } from '../shared/shared.module';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HistoryComponent
  ],
  imports: [SharedModule, ComponentModule],
})
export class PageModule {}
