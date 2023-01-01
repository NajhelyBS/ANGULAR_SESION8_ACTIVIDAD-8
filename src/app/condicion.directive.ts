import { outputAst } from '@angular/compiler';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCondicion]'
})
export class CondicionDirective {

@Input() condicion:String = "";
@Input() grupo4 = ["  "];


  constructor() {
    
  }
}