import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-editar-acerca-de-mi',
  templateUrl: './editar-acerca-de-mi.component.html',
  styleUrls: ['./editar-acerca-de-mi.component.css']
})
export class EditarAcercaDeMiComponent implements OnInit {

  acercaForm: FormGroup;
  persona: Persona = new Persona("","","","","","","","","","");
  id: number = 1;
  modoEdit: any;
  constructor(private formBuilder: FormBuilder, private pservice: PersonaService, private activedRoute: ActivatedRoute, private router: Router) { 
    this.acercaForm = this.formBuilder.group({

      imgPerfil:['', [Validators.required]],
      nombreCompleto:['', [Validators.required]],
      titulo:['', [Validators.required]],
      acerca:['', [Validators.required]]
   })


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

  
  ngOnInit(): void {
  
  }
  onUpdate(): void{
   
    const id = this.activedRoute.snapshot.params['id']; 
    this.pservice.update(this.persona).subscribe(
      data => {
        alert("la información fue modificada");
      //  window.location.reload();
      }, err =>{
        alert("error");
      //  window.location.reload();
      }
    )}
  
 //metodo para traer la info de la ddbb
cargarInfo(){
  this.pservice.update(this.persona).subscribe(data => {   
    this.persona = data;
  });
}

clean():void{
  this.acercaForm.reset();
}
}
