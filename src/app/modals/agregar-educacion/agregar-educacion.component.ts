import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/model/educacion';
@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  educacionForm: FormGroup;
  tituloCurso: string='';
  descripcionCurso: string='';
  inicio: string='';
  fin: string='';
  imgCurso: string='';

  constructor(private formBuilder: FormBuilder, private sEducacion: EducacionService) {
    this.educacionForm = this.formBuilder.group(
      {
        tituloCurso: ['', [Validators.required]],
        descripcionCurso: ['', [Validators.required]],
        inicio: [''],
        fin: [''],
        imgCurso: ['', [Validators.required]],
      }
    )
   }

  ngOnInit(): void {
  }
  get TituloCurso() {
    return this.educacionForm.get("tituloCurso");
  }
  get DescripcionCurso() {
    return this.educacionForm.get("descripcionCurso");
  }
  get ImagenCurso() {
    return this.educacionForm.get("imgCurso");
  }


  onCreate(): void{
    const educ = new Educacion(this.tituloCurso, this.descripcionCurso, this.inicio, this.fin, this.imgCurso);
  this.sEducacion.create(educ).subscribe(data=>{alert("Educación añadida")
window.location.reload();
})
}
clean():void{
  this.educacionForm.reset();
}
 onSend(event:Event){
  event.preventDefault;
  if (this.educacionForm.valid){
    this.onCreate();
  }else{
    alert("falló en la carga, intente nuevamente");
    this.educacionForm.markAllAsTouched();
  }
 }

}
