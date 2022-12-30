import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  grupo1 = ["  "];
  grupo2 = ["  "];
 

  Registro(nombre:String,apellidos:String){
    this.grupo1.push(String(nombre));
    this.grupo2.push(String(apellidos));

    alert(nombre);
    alert(apellidos);
  }
}
