import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../../services/listing.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countrywiselist',
  templateUrl: './countrywiselist.component.html',
  styleUrls: ['./countrywiselist.component.scss'],
})
export class CountrywiselistComponent implements OnInit {
  countryDataSubscription: Subscription;
  countryWiseData: any;
  displayData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  paginatedData: any;
  searchInput;
  offset: number = 0;
  limit: number = 30;
  sortOption = '';
  constructor(
    private countrylistSrv: ListingService,
    private loadingSrv: NgxUiLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingSrv.start();
    this.countryDataSubscription = this.countrylistSrv
      .fetchCountryWiseData()
      .subscribe((resp: any) => {
        this.countryWiseData = resp;
        // checking for edited datas which are saved in service
        this.countrylistSrv.editedData.subscribe((response) => {
          response.forEach((item) => {
            const index = this.countryWiseData.findIndex(
              (x) => x.country == item.country
            );
            this.countryWiseData[index] = item;
          });
          this.displayData.next(this.countryWiseData);
        });
        this.loadingSrv.stop();
      });
    this.displayData.subscribe((resp) => {
      if (resp) this.paginate(0, 30, resp);
    });
  }

  searchCountry() {
    this.displayData.next(
      this.countryWiseData.filter((p) =>
        _.includes(p.country.toLowerCase(), this.searchInput.toLowerCase())
      )
    );
  }

  sortData() {
    this.displayData.next(
      _.orderBy(this.displayData.value, [this.sortOption], ['asc'])
    );
  }

  paginate(offset, limit, data) {
    this.offset = offset;
    this.paginatedData = [];
    data.forEach((item, i) => {
      if (i >= offset * limit && i < (offset + 1) * limit)
        this.paginatedData.push(item);
    });
  }

  updateOffset(position) {
    if (
      position == 'next' &&
      (this.offset + 1) * this.limit < this.displayData.value.length
    )
      this.offset += 1;
    else if ((this.offset + 1) * this.limit > this.limit && position == 'prev')
      this.offset -= 1;
    this.paginate(this.offset, this.limit, this.displayData.value);
  }

  editData(data) {
    this.router.navigate(['list/edit'], { state: data });
  }

  ngOnDestroy() {
    if (this.countryDataSubscription)
      this.countryDataSubscription.unsubscribe();
  }
}
