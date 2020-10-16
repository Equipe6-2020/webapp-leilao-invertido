import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubCategory } from 'src/app/model/subcategory/subcategory';
import { SubcategoryService } from 'src/app/model/subcategory/subcategory.service';
import { PurchaseService } from 'src/app/model/purchase/purchase.service';
import { Purchase } from 'src/app/model/purchase/purchase';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.sass']
})
export class WishlistCreateComponent implements OnInit {

  wishlistCreated: boolean = false;
  subCategories: SubCategory[] = [];
  creating: boolean = false

  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    averagePrice: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    subCategoryId: new FormControl(1, [Validators.required]),
  });

  constructor(private subCategoryService: SubcategoryService,
    private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.subCategoryService.getAll({
      pageIndex: 0,
      pageSize: 10000
    })
    .subscribe((response: any) => {
      this.subCategories = response.data;
    });
  }

  submit() {
    console.log(this.form.value);
    const purchase: Purchase = this.form.value;
    purchase.date = new Date();
    console.log('Submitting', purchase, JSON.stringify(purchase));
    this.creating = true;
    this.purchaseService.create(purchase).subscribe((data: any) => {
      console.log(data);
      this.wishlistCreated = true;
      this.creating = false;
    });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
