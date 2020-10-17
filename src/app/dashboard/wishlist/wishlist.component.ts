import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/model/purchase/purchase';
import { NaturalPersonService } from 'src/app/model/natural-person/natural-person.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/model/user/user.service';
import { User } from 'src/app/model/user/user';
import { Observable } from 'rxjs';
import { PurchaseService } from 'src/app/model/purchase/purchase.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  loading: boolean = true;
  purchases: Purchase[];
  user: User;

  constructor(private naturalPersonService: NaturalPersonService,
    private purchaseService: PurchaseService,
    private userService: UserService) {
      this.user = userService.getUser();
  }

  ngOnInit(): void {
    this.getOperation().subscribe((response: any) => {
      console.log(response);
      this.purchases = response.data;
      this.loading = false;
    });
  }

  getOperation(): Observable<Purchase[]> {
    if (this.user.typeUser == 'NaturalPerson') {
      return this.naturalPersonService.getAllPurchases({
        pageIndex: 0,
        pageSize: 10000
      });
    }

    return this.purchaseService.getAll({
      pageIndex: 0,
        pageSize: 10000
    });
  }

}
