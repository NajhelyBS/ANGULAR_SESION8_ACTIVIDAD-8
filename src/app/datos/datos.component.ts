import { Component, Input } from '@angular/core';
import { CondicionDirective } from '../condicion.directive';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  grupo1 = ["  "];
  grupo2 = ["  "];
  grupo3 = ["  "];
  grupo4 = ["  "];

  condicion:String = "";

  Registro(nombre:String,apellidos:String,edad:Number){
    this.grupo1.push(String(nombre));
    this.grupo2.push(String(apellidos));
    this.grupo3.push(String(edad));

    if (edad >= 18){
    var condicion:String = "Es mayor de edad";
    this.grupo4.push(String(condicion));

    } else if (edad <= 17 ){
      var condicion:String = "Es menor de edad";
      this.grupo4.push(String(condicion));
  }
}
}
