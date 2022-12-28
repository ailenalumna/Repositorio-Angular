import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {
proyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  this.proyForm = this.formBuilder.group(
    {
      nombreProy: ['', [Validators.required]],
      descripcionProy: ['', [Validators.required]],
      imgProy: ['', [Validators.required]],
    }
  )
  }
  ngOnInit(): void {
  }
  get nombreProy(){
    return this.proyForm.get("nombreProy");
  }
  get descripcionProy(){
    return this.proyForm.get("descripcionProy");
  }
  get imgProy(){
    return this.proyForm.get("imgProy");
  }
}
