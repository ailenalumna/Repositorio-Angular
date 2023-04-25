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
  //id: number = 1;
  //modoEdit: boolean=false;
  constructor(private formBuilder: FormBuilder, private pservice: PersonaService, private activedRoute: ActivatedRoute, private router: Router) { 
    this.acercaForm = this.formBuilder.group({
      id:[''],
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

  onUpdate(): void{
 this.pservice.update(this.acercaForm.value).subscribe(data => {});
   

  }
  onEnviar(event:Event){
    event.preventDefault;
    if (this.acercaForm.valid){
      this.onUpdate();
      alert("perfil modificado");
      this.router.navigate(['']);
    }else{
      alert("falló la carga, intente nuevamente");
      this.acercaForm.markAllAsTouched();
    }
  }


}
