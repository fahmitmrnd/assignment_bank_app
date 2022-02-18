import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoryComponent } from "./pages/history/history.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { ManagementComponent } from "./pages/management/management.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TransactionComponent } from "./pages/transaction/transaction.component";
import { AuthGuard } from "./shared/guard/auth.guard";
import { PrivilegeGuard } from "./shared/guard/privilege.guard.";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'management',
    canActivate: [AuthGuard, PrivilegeGuard],
    component: ManagementComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
