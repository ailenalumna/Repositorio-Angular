import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
expForm: FormGroup;
//modoEdit:boolean=false;
descripcion: string=''; 

  constructor(private formBuilder: FormBuilder,private sExperiencia: ExperienciaService) { 
    this.expForm = this.formBuilder.group(
      {
        descripcion:['', [Validators.required]],
      })
  }

  ngOnInit(): void {
  }
  
  get Descripcion() {
    return this.expForm.get("descripcion");
  }

  onCreate(): void{
    const expe = new Experiencia(this.descripcion);
  this.sExperiencia.create(expe).subscribe(data=>{alert("Experiencia añadida")})
window.location.reload();

}

clean():void{
  this.expForm.reset();
}

}

//onSend(event:Event){
  //event.preventDefault;
  //if (this.expForm.valid){
   // this.onCreate();
  //}else{
  //  alert("falló en la carga, intente nuevamente");
   // this.expForm.markAllAsTouched();
  //}
 //}