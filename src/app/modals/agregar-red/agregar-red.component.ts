import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RedService } from 'src/app/servicios/red.service';
import { Red } from 'src/app/model/red';
@Component({
  selector: 'app-agregar-red',
  templateUrl: './agregar-red.component.html',
  styleUrls: ['./agregar-red.component.css']
})
export class AgregarRedComponent implements OnInit {
redForm: FormGroup;
id: number=1;
nombre: string='';
icono: string='';
url: string='';
  constructor(private formBuilder: FormBuilder, private sRed: RedService) { 
    this.redForm = this.formBuilder.group(
{
  nombre: ['', [Validators.required]],
  icono: ['', [Validators.required]],

}
    )
  }

  ngOnInit(): void {
  }
get Nombre() {
    return this.redForm.get("nombre");
  }
  get Icono() {
    return this.redForm.get("icono");
  }
  onCreate(): void{
    const red = new Red(this.nombre, this.icono);
  this.sRed.create(red).subscribe(data=>{alert("Red añadida")
window.location.reload();
})
}
clean():void{
  this.redForm.reset();
}
 onSend(event:Event){
  event.preventDefault;
  if (this.redForm.valid){
    this.onCreate();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.redForm.markAllAsTouched();
  }
 }
}
