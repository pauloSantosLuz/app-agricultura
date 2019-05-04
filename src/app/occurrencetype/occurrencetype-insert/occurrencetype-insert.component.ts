import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OccurrencetypeService } from '../occurrencetype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-occurrencetype-insert',
  templateUrl: './occurrencetype-insert.component.html',
  styleUrls: ['./occurrencetype-insert.component.css']
})
export class OccurrencetypeInsertComponent implements OnInit {
  ownerForm: FormGroup;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router,
    private occurrencetypeService: OccurrencetypeService) {
    iconRegistry.addSvgIcon('iconClose', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.ownerForm = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required, Validators.maxLength(60)]),

    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  add() {
    this.occurrencetypeService.postOccurrencetype(this.f.descricao.value).subscribe(() => {

      // redireciona a view
      this.router.navigate(['/occurrencetype/list']);
    },
      (error) => {
        this.message = error;
      }

    );
  }
}
