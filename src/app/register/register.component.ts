import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  pessoaFisicaRegisterForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    socialName: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  pessoaJuridicaRegisterForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    registeredNumber: new FormControl(''),
    tradeName: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {

  }

  submitPessoaFisicaRegisterForm() {
    if (this.pessoaFisicaRegisterForm.valid) {
      this.submitEM.emit(this.pessoaFisicaRegisterForm.value);
    }
  }

  submitPessoaJuridicaRegisterForm() {
    if (this.pessoaFisicaRegisterForm.valid) {
      this.submitEM.emit(this.pessoaFisicaRegisterForm.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
