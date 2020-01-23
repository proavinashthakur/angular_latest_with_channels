import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
declare var $: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products;
  addProductForm = undefined;
  constructor(private ps: ProductsService, private route: Router) {
    this.products = this.ps.listProducts().subscribe((resp): any => {
      if (resp.status) {
        this.products = resp.data;
        console.log(this.products)
      }
    })
  }

  deleteProduct(pid) {
    this.ps.deleteProduct(pid).subscribe((resp): any => {
      if (resp.status) {
        this.products = resp.data;
        this.route.navigate(['list-product']);
      }
      else {
        alert(resp.msg);
      }
    })
  }

  getSingleProduct(pid) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == pid) {
        return this.products[i]
      }
    }
  }

  updateProductForm(pid) {
    let product_detail = this.getSingleProduct(pid)
    this.addProductForm = new FormGroup({
      pid: new FormControl(product_detail.id, Validators.required),
      title: new FormControl(product_detail.title, Validators.required),
      year: new FormControl(product_detail.year, Validators.required),
      feature: new FormControl(product_detail.feature, Validators.required),
      usage_status: new FormControl(product_detail.usage_status, Validators.required),
      kms_driven: new FormControl(product_detail.kms_driven, Validators.required),
      price: new FormControl(product_detail.price, Validators.required),
    })
    $('#addProductModal').modal('show');
  }

  destroyUpdateForm() {
    this.addProductForm = new FormGroup({});
    $('#addProductModal').modal('hide');
  }

  updateProduct(data) {
    this.ps.updateProduct(data.value).subscribe((resp): any => {
      if (resp.status) {
        this.products = resp.data;
        $('#addProductModal').modal('hide');
      }
      else {
        alert(resp.msg)
      }
    })
  }

  ngOnInit() {

  }

}
