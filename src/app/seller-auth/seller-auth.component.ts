import { Component } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { signup } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}
  registerForm: any;
  showLogin: boolean = false;
  authError: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  onSubmit(data: signup): void {
    console.log(data);
    this.seller.userSignup(data);
  }
  onLogin(data: any): void {
    console.log(data);
    this.seller.userLogin(data);
    this.seller.isSellerLoggedError.subscribe((isError: any) => {
      if (isError) {
        this.authError = 'user Email or Password is not correct';
      }
    });
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignup() {
    this.showLogin = false;
  }
}
