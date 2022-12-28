import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
expForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.expForm = this.formBuilder.group(
      {
        descripTrabajo:['', [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
  }
  get descripTrabajo() {
    return this.expForm.get("descripTrabajo");
  }

}
