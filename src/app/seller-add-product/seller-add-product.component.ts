import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  productMessage: string | undefined;
  constructor(private sellerproduct: ProductService) {}
  submitProduct(data: product) {
    this.sellerproduct.additem(data).subscribe((result) => {
      console.log(result);
      if (result) {
        this.productMessage = 'product successfully added';
      }
      setTimeout(() => (this.productMessage = undefined), 3000);
    });
  }
}
