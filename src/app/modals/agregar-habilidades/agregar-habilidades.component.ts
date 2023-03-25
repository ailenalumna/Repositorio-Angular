import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {
  habForm : FormGroup;
  nombreHab : string='';
  porcentaje : number=0;

  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) { 
    this.habForm = this.formBuilder.group({
      nombreHab: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  
  get NombreHab() {
    return this.habForm.get("nombreHab");
  }
  get Porcentaje() {
    return this.habForm.get("porcentaje");
  }

  onCreate(): void{
    const hab = new Habilidades(this.nombreHab, this.porcentaje);
    this.sHabilidad.create(hab).subscribe(data=>{alert("Habilidad añadida")})
    window.location.reload();
  }
  clean():void{
    this.habForm.reset();
  }
   onSend(event:Event){
    event.preventDefault;
    if (this.habForm.valid){
      this.onCreate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.habForm.markAllAsTouched();
    }
   }
}
