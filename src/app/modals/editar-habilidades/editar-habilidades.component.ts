import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {
  editarHabForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.editarHabForm = this.formBuilder.group({
      nombrehab:['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
       })
   }

  ngOnInit(): void {
  }
  get nombrehab() {
    return this.editarHabForm.get("nombrehab");
  }
  get porcentaje() {
    return this.editarHabForm.get("porcentaje");
  }


}
