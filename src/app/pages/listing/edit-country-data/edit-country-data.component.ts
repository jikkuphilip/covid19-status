import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-edit-country-data',
  templateUrl: './edit-country-data.component.html',
  styleUrls: ['./edit-country-data.component.scss'],
})
export class EditCountryDataComponent implements OnInit {
  dataSub: Subscription;

  constructor(
    private listingSrv: ListingService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService
  ) {}
  editDetails;
  submitted: boolean = false;
  editForm: FormGroup;

  ngOnInit(): void {
    this.editDetails = history.state;
    this.editForm = this.formBuilder.group({
      cases: [
        this.editDetails.cases,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      deaths: [
        this.editDetails.deaths,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      tests: [
        this.editDetails.tests,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      recovered: [
        this.editDetails.recovered,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
    });
  }

  save() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.editDetails.cases = this.editForm.controls.cases.value;
      this.editDetails.deaths = this.editForm.controls.deaths.value;
      this.editDetails.tests = this.editForm.controls.tests.value;
      this.editDetails.recovered = this.editForm.controls.recovered.value;
      this.listingSrv.updateEditedData(this.editDetails);
      this.toast.success('Data updated successfully');
      this.router.navigateByUrl('list');
    }
  }

  cancel() {
    this.router.navigateByUrl('list');
  }
}
