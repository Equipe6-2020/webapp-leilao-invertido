import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/model/purchase/purchase';
import { NaturalPersonService } from 'src/app/model/natural-person/natural-person.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  loading: boolean = true;
  purchases: Purchase[];

  constructor(private naturalPersonService: NaturalPersonService) {

  }

  ngOnInit(): void {
    this.naturalPersonService.getAllPurchases({
      pageIndex: 0,
      pageSize: 10000
    }).subscribe((response: any) => {
      console.log(response);
      this.purchases = response.data;
      this.loading = false;
    });
  }

}
