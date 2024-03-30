import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('in seller');
          this.menuType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
            console.log(sellerData.name);
          }
        } else {
          console.log('outside seller');
          this.menuType = 'default';
        }
      }
      console.log(val.url);
    });
  }
  sellerLogout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
    console.log('seller logout');
  }
}
