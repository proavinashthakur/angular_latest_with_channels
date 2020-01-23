import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProductsService, private route: Router) { }
  addProductForm = new FormGroup({
    title: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    feature: new FormControl('', Validators.required),
    usage_status: new FormControl('', Validators.required),
    kms_driven: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  })

  addProduct(data) {
    console.log(data.value)
    this.ps.addProduct(data.value).subscribe((resp): any => {
      if (resp.status) {
        this.route.navigate(['list-product']);
      }
      else {
        alert(resp.msg);
      }
    })

  }
  ngOnInit() {
  }

}
