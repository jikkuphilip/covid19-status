import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardData: any = {};
  dashboardsubscription: Subscription;
  constructor(
    private dashboardSrv: DashboardService,
    private loadersrv: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.loadersrv.start();
    this.dashboardsubscription = this.dashboardSrv
      .fetchDashboardData()
      .subscribe((resp) => {
        this.dashboardData = resp;
        this.loadersrv.stop();
      });
  }

  ngOnDestroy() {
    if (this.dashboardsubscription) this.dashboardsubscription.unsubscribe();
  }
}
