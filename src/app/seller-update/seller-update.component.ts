import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../service/seller.service';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css'],
})
export class SellerUpdateComponent {
  productMessage: undefined | string;
  productData: undefined | product;
  constructor(
    private route: ActivatedRoute,
    private sellerproduct: ProductService,
    private router: Router
  ) {}
  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.sellerproduct.getproductId(productId).subscribe((data) => {
        this.productData = data;
        console.log('hai', this.productData);
      });
  }
  updateData(data: product) {
    console.log('updated data', data);
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.sellerproduct.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Data Updated Successfully';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
      this.router.navigate(['seller-home']);
    }, 3000);
  }
}
