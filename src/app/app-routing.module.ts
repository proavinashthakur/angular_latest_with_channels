import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
      {
        path: 'select-city',
        component: SelectCityComponent
      },
      {
        path: 'add-city',
        component: AddCityComponent
      },
      {
        path: '',
        component: ListProductComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
