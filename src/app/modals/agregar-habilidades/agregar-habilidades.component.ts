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
  habilidad : string='';
  porcentaje : number=0 ;
  modoEdit:boolean=false;

  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) { 
    this.habForm = this.formBuilder.group({
      habilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
  }
  
  get Habilidad() {
    return this.habForm.get("habilidad");
  }
  get Porcentaje() {
    return this.habForm.get("porcentaje");
  }
  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad.valid;
  }
  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  onCreate(): void{
    const hab = new Habilidades(this.habilidad, this.porcentaje);
    this.sHabilidad.create(hab).subscribe(data=>{alert("Habilidad añadida")})
    window.location.reload();
  }
  clean():void{
    this.habForm.reset();
  }

}



//onSend(event:Event){
 // event.preventDefault;
  //if (this.habForm.valid){
    //this.onCreate();
  //}else{
   // alert("falló en la carga, intente nuevamente");
    //this.habForm.markAllAsTouched();
  //}
// }
