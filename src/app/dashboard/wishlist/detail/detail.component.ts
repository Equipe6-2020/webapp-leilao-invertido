import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Purchase } from 'src/app/model/purchase/purchase';
import { PurchaseService } from 'src/app/model/purchase/purchase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/model/offer/offer';
import { OfferService } from 'src/app/model/offer/offer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  private id: number;
  private purchase: Purchase;
  loaded: boolean = false;

  form: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    inStock: new FormControl(false)
  });

  constructor(private purchaseService: PurchaseService,
    private offerService: OfferService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params.id;
    this.loadPurchase();    
  }

  loadPurchase() {
    this.purchaseService.get(this.id).subscribe((data: Purchase) => {
      this.purchase = data;
      this.loaded = true;
      console.log(this.purchase);
    });
  }

  submit() {
    const offer: Offer = this.form.value;
    offer.purchaseId = this.id;
    this.offerService.create(offer).subscribe((response) => {
      console.log(response);
    });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
