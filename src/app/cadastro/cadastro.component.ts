import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 formCadastro: FormGroup;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router)
  {
    iconRegistry.addSvgIcon('iconClose', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formCadastro.controls[controlName].hasError(errorName);
  }
  

}
