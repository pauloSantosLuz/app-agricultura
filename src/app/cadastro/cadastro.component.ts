import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
 formCadastro: FormGroup;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router, private cadastroService:CadastroService)
  {
    iconRegistry.addSvgIcon('iconClose', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  get f() {
    return this.formCadastro.controls;
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.formCadastro.controls[controlName].hasError(errorName);
  }
  
  add() {
    this.cadastroService.cadastro(this.f.nome.value, this.f.email.value, this.f.telefone.value, this.f.senha.value, 1, 1).subscribe(() => {
      // redireciona a view
      this.router.navigate(['/login']);
    },
      (error) => {
        this.message = error;
      }

    );
  }

}
