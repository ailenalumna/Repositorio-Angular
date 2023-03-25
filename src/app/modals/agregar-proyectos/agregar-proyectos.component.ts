import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {
proyForm: FormGroup;
titulo: string='';
descripcion: string='';
logoProyecto: string='';
inicio: string='';
fin: string='';
  constructor(private formBuilder: FormBuilder, private sProyecto: ProyectoService) { 
  this.proyForm = this.formBuilder.group(
    {
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      logoProyecto: ['', [Validators.required]],
      inicio: [''],
      fin: [''],
    }
  )
  }
  ngOnInit(): void {
  }
  get Titulo(){
    return this.proyForm.get("titulo");
  }
  get Descripcion(){
    return this.proyForm.get("descripcion");
  }
  get LogoProyecto(){
    return this.proyForm.get("logoProyecto");
  }

  onCreate(): void{
    const proy = new Proyecto(this.titulo, this.descripcion, this.logoProyecto, this.inicio, this.fin);
  this.sProyecto.create(proy).subscribe(data=>{alert("Proyecto añadido")
window.location.reload();
})
}
clean():void{
  this.proyForm.reset();
}
 onSend(event:Event){
  event.preventDefault;
  if (this.proyForm.valid){
    this.onCreate();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.proyForm.markAllAsTouched();
  }
 }


}
