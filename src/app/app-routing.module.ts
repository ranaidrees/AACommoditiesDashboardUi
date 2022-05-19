import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { DashboardDataService } from './dashboard/dashboard-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [{ path: '', component: DashboardComponent },
                        { path: '**', component: DashboardComponent }];
@NgModule({
    imports: [RouterModule.forRoot(routes),
        NgChartsModule, HttpClientModule],
    exports: [RouterModule],
    providers: [DashboardDataService],
})
export class AppRoutingModule { }
