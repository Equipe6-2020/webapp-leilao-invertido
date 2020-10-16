import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators , FormArray} from '@angular/forms';
import { NaturalPerson } from '../model/natural-person/natural-person';
import { NaturalPersonService } from '../model/natural-person/natural-person.service';
import { SubcategoryService } from '../model/subcategory/subcategory.service';
import { BusinessService } from '../model/business/business.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  pessoaFisicaCreated: boolean = false
  pessoaJuridicaCreated: boolean = false
  subCategories: SubcategoryService[]
  creating: boolean = false
  
  pessoaFisicaRegisterForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    socialNumber: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      neighborhood: new FormControl('', [Validators.required])
    })
  });

  pessoaJuridicaRegisterForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    registeredNumber: new FormControl('', [Validators.required]),
    tradeName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    subcategories: new FormArray([]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      neighborhood: new FormControl('', [Validators.required])
    })
  });

  constructor(private naturalPersonService: NaturalPersonService,
    private subcategoryService: SubcategoryService,
    private businessService: BusinessService) { }

  ngOnInit(): void {
    this.subcategoryService.getAll({
      pageIndex: 0,
      pageSize: 10000
    })
    .subscribe((response: any) => {
      this.subCategories = response.data;
    });
  }

  submitPessoaFisicaRegisterForm() {
    const naturalPerson = this.pessoaFisicaRegisterForm.value;
    console.log('Submitting', naturalPerson, JSON.stringify(naturalPerson));
    this.creating = true;
    this.naturalPersonService.create(naturalPerson).subscribe((data: any) => {
      console.log(data);
      this.creating = false;
      this.pessoaFisicaCreated = true;
    });
  }

  submitPessoaJuridicaRegisterForm() {
    const business = this.pessoaJuridicaRegisterForm.value;
    console.log('Submitting', business, JSON.stringify(business));
    this.creating = true;
    this.businessService.create(business).subscribe((data: any) => {
      console.log(data);
      this.creating = false;
      this.pessoaJuridicaCreated = true;
    });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
