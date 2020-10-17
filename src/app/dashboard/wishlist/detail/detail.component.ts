import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Purchase } from 'src/app/model/purchase/purchase';
import { PurchaseService } from 'src/app/model/purchase/purchase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/model/offer/offer';
import { OfferService } from 'src/app/model/offer/offer.service';
import { LoadingDialogComponent } from 'src/app/loading-dialog/loading-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/model/user/user.service';
import { User } from 'src/app/model/user/user';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  private id: number
  private purchase: Purchase
  loaded: boolean = false
  creating: boolean = false
  user: User
  isFinalized: boolean = false
  selectedOffer: Offer
  error: string;

  form: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    inStock: new FormControl(false)
  });

  constructor(private purchaseService: PurchaseService,
    private offerService: OfferService,
    private dialog: MatDialog,
    private userService: UserService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params.id;
    this.loadPurchase();
    this.user = this.userService.getUser();
  }

  loadPurchase() {
    this.purchaseService.get(this.id).subscribe((data: Purchase) => {
      this.checkOffers(data);
      this.purchase = data;
      this.loaded = true;
      console.log(this.purchase);
    });
  }

  checkOffers(purchase: Purchase) {
    this.selectedOffer = purchase.offers?.filter(offer => offer.selected)[0];
    this.isFinalized = this.selectedOffer != null || this.selectedOffer != undefined;
  }

  submit(formDirective: FormGroupDirective) {
    this.error = null;
    const offer: Offer = this.form.value;
    offer.purchaseId = Number(this.id);
    console.log('creating', offer, JSON.stringify(offer));
    this.creating = true
    const obs: Observable<Offer> = this.offerService.create(offer);
      
    obs.subscribe((response) => {
      console.log(response);
      this.creating = false
      this.loadPurchase();
      formDirective.resetForm();
      this.form.reset();
    }, error => {
      console.log('error', error);
      this.creating = false;
      this.error = error.error;
    });
  }

  acceptOffer(offerToAccept: Offer) {
    console.log('accepting', offerToAccept);
    const modal = this.dialog.open(LoadingDialogComponent, {minWidth: '300px', maxWidth: '300px', disableClose: true});
    this.purchaseService.accept(Number(this.id), offerToAccept.id).subscribe((response) => {
      console.log(response);
      modal.close();
      this.loadPurchase();
    });
  }

}
