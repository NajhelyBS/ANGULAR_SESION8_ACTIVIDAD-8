import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  grupo1 = ["  "];
  grupo2 = ["  "];
  grupo3 = ["  "];

  Registro(nombre:String,apellidos:String,edad:Number){
    this.grupo1.push(String(nombre));
    this.grupo2.push(String(apellidos));
    this.grupo3.push(String(edad));
    alert(nombre);
    alert(apellidos);
    alert(edad);

    
  }
}
