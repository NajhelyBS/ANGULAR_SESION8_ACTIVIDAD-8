import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  grupo1 = ["  "];
 

  Registro(nombre:String,apellidos:String){
    this.grupo1.push(String(nombre));

    alert(nombre);
    alert(apellidos);
  }
}
