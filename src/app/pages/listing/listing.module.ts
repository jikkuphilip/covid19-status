import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrywiselistComponent } from './countrywiselist/countrywiselist.component';
import { EditCountryDataComponent } from './edit-country-data/edit-country-data.component';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingService } from 'src/app/services/listing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountrywiselistComponent, EditCountryDataComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ListingService],
})
export class ListingModule {}
