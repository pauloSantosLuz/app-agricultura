import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { OccurrencetypeService } from '../occurrencetype.service';

@Component({
  selector: 'app-occurrencetype-update',
  templateUrl: './occurrencetype-update.component.html',
  styleUrls: ['./occurrencetype-update.component.css']
})
export class OccurrencetypeUpdateComponent implements OnInit {

  ownerForm: FormGroup;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private formBuilder: FormBuilder,private router: Router,
    private occurrencetypeService: OccurrencetypeService, private activateRoute:ActivatedRoute) { 
    iconRegistry.addSvgIcon('iconClose',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }
id;
description;
  ngOnInit() {
    this.id =this.activateRoute.snapshot.params['id'];
    this.description=this.activateRoute.snapshot.params['description'];
    this.ownerForm =  this.formBuilder.group({
      descricao: new FormControl('', [Validators.required, Validators.maxLength(60),descricaoDiferenteValidator(this.description)]),
     
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  att(){
    this.occurrencetypeService.putOccurrencetype(this.id,this.f.descricao.value).subscribe(() => {
      this.router.navigate(['/occurrencetype/list']);
    },
    (error) => {
      this.message = error;
    });
  }

}

function descricaoDiferenteValidator(descricao:string):ValidatorFn{
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value == descricao) {
        return { 'descricaoDif': true };
    }
    return null;
};
}