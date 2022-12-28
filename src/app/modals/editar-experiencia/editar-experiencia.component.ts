import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
editarexpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.editarexpForm = this.formBuilder.group({
   descripcionTrabajo:['', [Validators.required]],
      
    })

  }

  ngOnInit(): void {
  }
  get descripcionTrabajo() {
    return this.editarexpForm.get("descripcionTrabajo");
  }

}
