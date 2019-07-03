import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PrecipitationService } from '../precipitation.service';

@Component({
  selector: 'app-precipitation-insert',
  templateUrl: './precipitation-insert.component.html',
  styleUrls: ['./precipitation-insert.component.css']
})
export class PrecipitationInsertComponent implements OnInit {
  ownerForm: FormGroup;
  id;
  message;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router,
    private occurrencetypeService: PrecipitationService) {
    iconRegistry.addSvgIcon('iconClose', sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.ownerForm = this.formBuilder.group({
      observation: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      collectionType: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      volume: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      startDate: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      endDate: new FormControl('', [Validators.required, Validators.maxLength(60)]),

    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  get f() {
    return this.ownerForm.controls;
  }
  add() {
    this.occurrencetypeService.postPrecipitation(this.f.observation.value,
      this.f.collectionType.value,this.f.volume.value,this.f.startDate.value,
      this.f.endDate.value,this.id).subscribe(() => {

      // redireciona a view
     // this.router.navigate(['/occurrencetype/list']);
    },
      (error) => {
        this.message = error;
      }

    );
  }
}
