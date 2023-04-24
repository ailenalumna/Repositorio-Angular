import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
editareducForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
this.editareducForm = this.formBuilder.group({
  tituloDelCurso:['', [Validators.required]],
  certificado: ['', [Validators.required]],
})


  }

  ngOnInit(): void {
  }
  get tituloDelCurso() {
    return this.editareducForm.get("tituloDelCurso");
  }
  get certificado() {
    return this.editareducForm.get("certificado");
  }



}
