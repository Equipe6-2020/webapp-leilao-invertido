import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface SubCategory {
  id: number;
  description: string;
  categoryId: number;
}

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.sass']
})
export class WishlistCreateComponent implements OnInit {

  subCategories: SubCategory[] = [
    { id: 1, description: 'Banheiros', categoryId: 1}
  ];

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    averagePrice: new FormControl(''),
    description: new FormControl(''),
    subCategoryId: new FormControl(1),
  });

  constructor() { }

  ngOnInit(): void {

  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
