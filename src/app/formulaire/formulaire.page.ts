import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  monFormGroup : FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.monFormGroup = this.formBuilder.group({
      prenom : ['',[Validators.required,Validators.minLength(5)]],
      nom    : ['',Validators.required],
      age    : ['',Validators.required]
    })
  }
  recupe(){
    console.log(this.monFormGroup.value);
  }

}
