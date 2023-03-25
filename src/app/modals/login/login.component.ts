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
persona: Persona = new Persona("", "", "", "", "", "", "", "", "");

  constructor(private router: Router , private formBuilder: FormBuilder, private autService: AutenticacionService) {
     ///Creamos el grupo de controles para el formulario de login
     this.form= this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      clave:['',[Validators.required,Validators.minLength(8)]],
   
   })
   }

  ngOnInit() {}
  //metodos para el formulario

 //toma el dato del mail
 get Email(){
  return this.form.get('email');
 }
  //toma el dato de la password
  get Clave(){
    return this.form.get('clave');
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
      this.autService.loginPersona(JSON.stringify(this.form.value)).subscribe(data =>{
        console.log("DATA: " + JSON.stringify(data));
        
      //  if(data){
        //  alert("Estás logeado");
       // }else{alert("acceso incorrecto");
     // alert("error al iniciar sesión");
    //}
        window.location.reload();
      }, error =>{
        alert("Error al iniciar sesión.")
      })
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      
    }else{
      alert("Hay un error en el formulario.")
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      //this.form.markAllAsTouched(); 
    }
 
  }
  login(){
    if(this.form.valid){
      console.log("Llamar al servicio de login");
     // this.router.navigateByUrl('');
      //this.form.reset();
    }
    else{
    alert("Error al ingresar los datos.");
    }
  }

}
