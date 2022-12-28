import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  educacionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.educacionForm = this.formBuilder.group(
      {
        tituloCurso: ['', [Validators.required]],
        descripcionCurso: ['', [Validators.required]],
        imgCurso: ['', [Validators.required]],
      }
    )
   }

  ngOnInit(): void {
  }
  get tituloCurso() {
    return this.educacionForm.get("tituloCurso");
  }
  get descripcionCurso() {
    return this.educacionForm.get("descripcionCurso");
  }
  get imagenCurso() {
    return this.educacionForm.get("imgCurso");
  }

}
