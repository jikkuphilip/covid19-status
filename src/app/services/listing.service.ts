import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  public editedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  fetchCountryWiseData() {
    return this.http.get(environment.baseUrl + 'countries');
  }

  updateEditedData(data) {
    let editRecords = this.editedData.value;
    const index = editRecords.findIndex((x) => x.country == data.country);
    // checking whether already edited data; if yes replace with updated value, else saving as new value
    if (index != -1) editRecords[index] = data;
    else editRecords.push(data);
    this.editedData.next(editRecords);
  }
}
