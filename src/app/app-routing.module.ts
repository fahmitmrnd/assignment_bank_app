import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoryComponent } from "./pages/history/history.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TransactionComponent } from "./pages/transaction/transaction.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    children: [
      {
        path: ':id/profile',
        component: ProfileComponent
      },
      {
        path: ':id/history',
        component: HistoryComponent
      },
      {
        path: ':id/transaction',
        component: TransactionComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
