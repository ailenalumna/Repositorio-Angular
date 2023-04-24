import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup;
persona: Persona = new Persona("","","","","","","","","","");
modoEdit: boolean=false ;

  constructor(private ruta: Router , private formBuilder: FormBuilder, private autService: AutenticacionService) {
     ///Creamos el grupo de controles para el formulario de login
     this.form=this.formBuilder.group({
      clave:['',[Validators.required,Validators.minLength(8)]],
      email:['', [Validators.required,Validators.email]],
   })
   }

  ngOnInit(): void {}
  //metodos para el formulario
  
//toma el dato de la password
get Clave(){
  return this.form.get('clave');
}
 //toma el dato del mail
 get Email(){
  return this.form.get('email');
 }
  

//metodo de validacion de password
  get ClaveValid(){
    return this.Clave?.touched && !this.Clave?.valid;
  }
  get EmailValid(){
    return this.Email?.touched && !this.Email?.valid;
  }
 



  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      this.autService.loginPersona(JSON.stringify(this.form.value)).subscribe(data =>
        {
        console.log("DATA: " + JSON.stringify(data));
       window.location.reload();
       //this.ruta.navigate(['']);
      
       // if(data){
       //   alert("Estás logeado");
       // }else{alert("acceso incorrecto");
      //alert("error al iniciar sesión");
    //}
       
      })
      
      //this.router.navigate(['']);
  
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      
    } else{
      //this.form.markAllAsTouched(); 
      alert("Hay un error en el formulario.")
      // Corremos todas las validaciones para que s e ejecuten los mensajes de error en el template     
      //this.form.markAllAsTouched(); 
    }
 
  }
  //loginPersona(){
    //if(this.form.valid){
     // this.autService.loginPersona(this.form.value);
     // this.router.navigate(['']);
      //this.form.reset();
   // }
    //else{
    //alert("Error al ingresar los datos.");
   // }
  }


