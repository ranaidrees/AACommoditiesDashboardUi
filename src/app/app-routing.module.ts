import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
                        { path: '**', component: DashboardComponent }];
@NgModule({
    imports: [RouterModule.forRoot(routes),
        NgChartsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
