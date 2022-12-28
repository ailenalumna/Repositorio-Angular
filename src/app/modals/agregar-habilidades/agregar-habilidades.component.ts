import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {
  habForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.habForm = this.formBuilder.group({
      nombreHab: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  
  get nombreHab() {
    return this.habForm.get("nombreHab");
  }
  get porcentaje() {
    return this.habForm.get("porcentaje");
  }

}
