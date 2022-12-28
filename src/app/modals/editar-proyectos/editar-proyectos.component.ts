import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  editarProyForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.editarProyForm = this.formBuilder.group({
      nombreproy:['', [Validators.required]],
      logoproy: ['', [Validators.required]],
      descripcionproy: ['', [Validators.required]],
       })
  }

  ngOnInit(): void {
  }
  get nombreproy() {
    return this.editarProyForm.get("nombreproy");
  }
  get logoproy() {
    return this.editarProyForm.get("logoproy");
  }
  get descripcionproy() {
    return this.editarProyForm.get("descripcionproy");
  }
}
