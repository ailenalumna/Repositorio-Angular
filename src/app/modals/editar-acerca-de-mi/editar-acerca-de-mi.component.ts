import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-acerca-de-mi',
  templateUrl: './editar-acerca-de-mi.component.html',
  styleUrls: ['./editar-acerca-de-mi.component.css']
})
export class EditarAcercaDeMiComponent implements OnInit {
  acercaForm: FormGroup;
  //modoEdit: boolean=false;
  constructor(private formBuilder: FormBuilder) { 
    this.acercaForm = this.formBuilder.group({
      imgPerfil:['', [Validators.required]],
      nombreCompleto:['', [Validators.required]],
      titulo:['', [Validators.required]],
      acerca:['', [Validators.required]]
   })


  }

  ngOnInit(): void {
  }
  get imgPerfil() {
    return this.acercaForm.get("imgPerfil");
  }
  get nombreCompleto() {
    return this.acercaForm.get("nombreCompleto");
  }
  get titulo() {
    return this.acercaForm.get("titulo");
  }
  get acerca() {
    return this.acercaForm.get("acerca");
  }




}
