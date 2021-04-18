import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrywiselistComponent } from './countrywiselist/countrywiselist.component';
import { EditCountryDataComponent } from './edit-country-data/edit-country-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'countrywise', pathMatch: 'full' },
  { path: 'countrywise', component: CountrywiselistComponent },
  { path: 'edit', component: EditCountryDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}
