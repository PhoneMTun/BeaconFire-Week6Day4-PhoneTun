import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products: Product[] = [
    { name: 'M&M', category: 'Snacks', price: 1.99 },
    { name: 'Table', category: 'Furniture', price: 199 },
    { name: 'Kale', category: 'Vegetables', price: 2.49 }
  ];

  newProduct : Product = { name: '', category: '', price: 0};

 

  addProduct(): void {
    if(this.newProduct.name && this.newProduct.category && this.newProduct.price>0){
      this.products.push({...this.newProduct});
      this.newProduct= { name: '', category: '', price: 0};
  }
}
  deleteProduct(index:number): void {
    this.products.splice(index,1);
  }

}
