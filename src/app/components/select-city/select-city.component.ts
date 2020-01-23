import { Component, OnInit } from '@angular/core';
import { SelectCityService } from '../../core/services/select-city.service';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  continents = [];
  countries = [];
  cities = []

  constructor(private scs: SelectCityService) { }
  onContinentChange(id) {
    if (id == "null") {
      return ''
    }
    this.scs.get_countries(id).subscribe((resp): any => {
      console.log(resp.data)
      this.cities = [];
      this.countries = resp.data;
    })
  }
  onCountryChange(id) {
    if (id == "null") {
      return ''
    }
    this.scs.get_cities(id).subscribe((resp): any => {
      console.log(resp.data)
      this.cities = resp.data;
    })
  }
  ngOnInit() {
    this.scs.get_continents().subscribe((resp): any => {
      console.log(resp.data)
      this.continents = resp.data;
    })
  }

}
