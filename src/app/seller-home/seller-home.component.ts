import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-type';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: product[] | undefined;
  productMessage: undefined | string;
  productData: undefined | product[];
  obj: any;
  constructor(private sellerproduct: ProductService) {}
  ngOnInit() {
    this.listing();
  }

  deletItem(id: Number) {
    this.sellerproduct.deleteproduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.listing();
      }
      setTimeout(() => {
        this.productMessage = undefined;
      }, 3000);
    });
  }

  listing() {
    this.sellerproduct.getitem().subscribe((result) => {
      if (result) {
        this.productList = result;
        this.obj = result;
        localStorage.setItem('product', JSON.stringify(result));
      }
      console.log('product', this.productList);
    });
  }

  updateItem(id: Number) {
    this.showDiv.previous = true;
    console.log('product id', id);
  }
  showDiv = {
    previous: false,
  };
  closeForm() {
    this.showDiv.previous = false;
  }

  updateData() {
    this.showDiv.previous = false;

    console.log('dhfjkjrpe');
    // this.obj.price = data.price;
    this.sellerproduct.updateProduct(this.obj).subscribe((result) => {
      console.log('updated data', result);
      if (result) {
        this.productMessage = 'data upadate success';
        console.log(this.productData);
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
