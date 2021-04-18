import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from 'src/app/services/dashboard.service';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [DashboardService],
})
export class DashboardModule {}
