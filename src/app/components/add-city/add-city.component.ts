import { Component, OnInit } from '@angular/core';
import { SelectCityService } from '../../core/services/select-city.service';
import { AddCityService } from '../../core/services/add-city.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  continents = [];
  countries = [];

  all_cities_data = [];
  addCityloader = false;
  constructor(private scs: SelectCityService, private acs: AddCityService, private route: Router) { }
  addCityForm = new FormGroup({
    city: new FormControl('', Validators.required),
    country: new FormControl('null', Validators.required),
    continent: new FormControl('null', Validators.required)
  })
  getAllCitiesData() {
    return this.acs.get_all_data().subscribe((resp): any => {
      console.log(resp.data)
      this.all_cities_data = []
      this.all_cities_data = resp.data;
    })
  }
  addNewCity(data) {
    this.addCityloader = true;
    setTimeout(() => {
      this.acs.add_new_city(data.value).then((resp): any => {
        this.addCityForm.reset();
        this.getAllCitiesData();
        this.addCityloader = false;
      })
    }, 1300
    )

  }
  onContinentChange(id) {
    if (id == "null") {
      return ''
    }
    this.scs.get_countries(id).subscribe((resp): any => {
      console.log(resp.data)
      this.countries = resp.data;
    })
  }

  ngOnInit() {
    this.scs.get_continents().subscribe((resp): any => {
      console.log(resp.data)
      this.continents = resp.data;
    })
    this.acs.get_all_data().subscribe((resp): any => {
      console.log(resp.data)
      this.all_cities_data = resp.data;
    })
  }

}

