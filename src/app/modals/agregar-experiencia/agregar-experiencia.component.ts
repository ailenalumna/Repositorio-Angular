import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
expForm: FormGroup;
//modoEdit:boolean=false;
descripTrabajo: string=''; 
personaid: number = 1;
  constructor(private formBuilder: FormBuilder,private sExperiencia: ExperienciaService) { 
    this.expForm = this.formBuilder.group(
      {
        descripTrabajo:['', [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
  }
  
  get DescripTrabajo() {
    return this.expForm.get("descripTrabajo");
  }

  onCreate(): void{
    const expe = new Experiencia(this.descripTrabajo);
  this.sExperiencia.create(expe).subscribe(data=>{alert("Experiencia añadida")
window.location.reload();
})
}

clean():void{
  this.expForm.reset();
}
onSend(event:Event){
  event.preventDefault;
  if (this.expForm.valid){
    this.onCreate();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.expForm.markAllAsTouched();
  }
 }
}
