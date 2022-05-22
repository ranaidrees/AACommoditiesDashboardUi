import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { DashboardDataService } from './dashboard/dashboard-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeActionTableService } from './dashboard/trade-action-table/trade-action-table.service';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//     {
//       path: 'login',
//       canActivate: [ PublicGuard ],
//       loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
//     },
//     {
//       path: 'dashboard',
//       canActivate: [ ProtectedGuard ],
//       loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
//     },
//     {
//       path: '',
//       redirectTo: 'dashboard',
//       pathMatch: 'full'
//     },
//     {
//       path: '**',
//       redirectTo: 'dashboard',
//       pathMatch: 'full'
//     }
//   ];

const routes: Routes = [
//     {
//     canActivate: [ PublicGuard ],
//     path:'login', component: LoginComponent
//   },
    {
        path: 'dashboard', component: DashboardComponent
    },
                       ];
@NgModule({
    imports: [RouterModule.forRoot(routes),
        NgChartsModule, HttpClientModule],
    exports: [RouterModule],
    providers: [DashboardDataService, TradeActionTableService],
})
export class AppRoutingModule { }
